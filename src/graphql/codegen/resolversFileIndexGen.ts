import { path } from 'app-root-path'
import { outputFileSync, readFileSync } from 'fs-extra'
import { format } from 'prettier'
import { eslintDisableConsole } from '../../utils/eslintDisableConsole'
import { fsReaddirRecursive } from '../../utils/fsReaddirRecursive'
import { generatedServerDistPath, gqlPath } from './constant'

const capitalize = (str: string): string => {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const TYPES_MAP: Record<string, string> = {
  Boolean: 'boolean',
  ID: 'string',
  Number: 'number',
  String: 'string',
  any: 'any',
}

const getType = (type: string): string | undefined => {
  try {
    return TYPES_MAP[type] ?? 'any'
  } catch (error) {
    eslintDisableConsole.error(error)
    return 'any'
  }
}

type GraphqlSchemaJson = {
  __schema: {
    types: {
      fields: {
        name: string
        type: {
          kind: string
          name: string
          ofType: {
            kind: string
            name: string
          }
        }
      }[]
      kind: string
      name: string
    }[]
  }
}

const resolversFileTypeGen = async (): Promise<string> => {
  const json = readFileSync(`${generatedServerDistPath}/graphql.schema.json`, 'utf8')
  const schemaJson = JSON.parse(json) as GraphqlSchemaJson
  const res = schemaJson.__schema.types
    .filter(({ kind, name }) => kind === 'OBJECT' && !name.includes('__'))
    .map(({ fields, name }) => {
      return {
        fields: fields.map(({ name, type }) => {
          return { name, type: type.ofType.kind === 'SCALAR' ? type.ofType.name : 'any' }
        }),
        typeName: name,
      }
    })

  let type = 'type Resolvers = {\n'

  for (const { fields, typeName } of res) {
    type += `  ${typeName}: {\n`
    for (const field of fields) {
      type += `${field.name}: () => Promise<${getType(field.type)}>\n`
    }
    type += `}\n`
  }
  type += `}\n`

  return type
}

export const resolversFileIndexGen = async (): Promise<void> => {
  const resolversFiles = fsReaddirRecursive(`${path}/src/graphql/resolvers`).filter(
    (file) => !file.includes('index.ts'),
  )

  const type = await resolversFileTypeGen()

  let code = '/* eslint-disable @typescript-eslint/no-explicit-any */\n'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const schemaObject: any = {}

  for (const file of resolversFiles) {
    const [typeName, fileName] = file.split('/')
    const funcName = fileName.replace('.ts', '')

    const alias = typeName + capitalize(funcName)
    code += `import { ${funcName} as ${alias} } from './${file.replace('.ts', '')}'\n`
    schemaObject[typeName] = {
      ...schemaObject[typeName],
      [funcName]: alias,
    }
  }

  code += `\n${type}\n`
  code += `\n// このファイルは 自動生成されています\nexport const resolvers: Resolvers = {\n`

  for (const [key] of Object.entries(schemaObject)) {
    code += `  ${key}: {\n`
    for (const [funcName] of Object.entries(schemaObject[key])) {
      code += `${funcName}:${schemaObject[key][funcName]},\n`
    }
    code += `},\n`
  }
  code += `}\n`

  outputFileSync(`${gqlPath}/resolvers/index.ts`, await format(code, { parser: 'typescript', semi: false }))
}

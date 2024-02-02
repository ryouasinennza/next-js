import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'
import { path } from 'app-root-path'
import { outputFileSync, readFileSync } from 'fs-extra'
import { print } from 'graphql/index'
import { eslintDisableConsole } from './src/utils/eslintDisableConsole'
import type { CodegenConfig } from '@graphql-codegen/cli'

const gqlPath = `${path}/src/graphql`
const schemaPath = `${gqlPath}/schema/schema.graphql` // globも可
const generatedServerPath = `${gqlPath}/generated/server`
const generatedServerDistPath = `${gqlPath}/generated/server/dist`
const generatedClientPath = `${gqlPath}/generated/front`
const generatedClientDistPath = `${gqlPath}/generated/front/dist`

const commonType = readFileSync(`${gqlPath}/commonType.ts`, 'utf8')

const config: CodegenConfig = {
  documents: [`${gqlPath}/hooks`], // client query
  generates: {
    [`${generatedServerDistPath}/graphql.schema.json`]: {
      plugins: ['introspection'],
    },
    [`${generatedServerDistPath}/index.ts`]: {
      config: {
        enumsAsConst: true,
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
    [`${generatedClientDistPath}/`]: {
      config: {
        enumsAsTypes: true,
      },
      plugins: [],
      preset: 'client',
    },
  },
  hooks: {
    afterAllFileWrite: () => {
      try {
        const typesArray = loadFilesSync(schemaPath)
        const schema = print(mergeTypeDefs(typesArray))
        outputFileSync(`${generatedServerDistPath}/schema.graphql`, schema)
        outputFileSync(`${generatedServerDistPath}/schema.ts`, `export default \`${schema}\``)
        outputFileSync(
          `${generatedServerPath}/index.ts`,
          `export * from './dist'\nexport { default as typeDefs } from './dist/schema'\n`,
        )
        outputFileSync(`${generatedClientPath}/index.ts`, `export * from './dist'\n\n${commonType}`)
        outputFileSync(`${generatedClientPath}/types.ts`, `export * from './dist/graphql'`)
      } catch (error) {
        eslintDisableConsole.error(error)
      }
    },
  },
  overwrite: true,
  schema: schemaPath,
}

export default config

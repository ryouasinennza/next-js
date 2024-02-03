/* eslint-disable unicorn/prefer-top-level-await */
import { CodegenConfig, createContext, generate } from '@graphql-codegen/cli'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'
import { outputFileSync } from 'fs-extra'
import { print } from 'graphql/index'
import { eslintDisableConsole } from '../../utils/eslintDisableConsole'
import {
  commonType,
  generatedClientDistPath,
  generatedClientPath,
  generatedServerDistPath,
  generatedServerPath,
  gqlPath,
  schemaPath,
} from './constant'
import { resolversFileIndexGen } from './resolversFileIndexGen'
;(async (): Promise<void> => {
  const context = await createContext()

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
      afterAllFileWrite: async () => {
        try {
          // server
          const typesArray = loadFilesSync(schemaPath)
          const schema = print(mergeTypeDefs(typesArray))
          outputFileSync(`${generatedServerDistPath}/schema.graphql`, schema)
          outputFileSync(`${generatedServerDistPath}/schema.ts`, `export default \`${schema}\``)
          outputFileSync(
            `${generatedServerPath}/index.ts`,
            `export * from './dist'\nexport { default as typeDefs } from './dist/schema'\n`,
          )
          // front
          outputFileSync(`${generatedClientPath}/index.ts`, `export * from './dist'\n\n${commonType}`)
          outputFileSync(`${generatedClientPath}/types.ts`, `export * from './dist/graphql'`)
          // resolvers
          await resolversFileIndexGen()
        } catch (error) {
          eslintDisableConsole.error(error)
        }
      },
    },
    overwrite: true,
    schema: schemaPath,
  }

  context.updateConfig(config)
  await generate(context)
})()

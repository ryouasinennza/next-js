import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'
import { path } from 'app-root-path'
import { outputFileSync } from 'fs-extra'
import { print } from 'graphql/index'
import { eslintDisableConsole } from './src/utils/eslintDisableConsole'
import type { CodegenConfig } from '@graphql-codegen/cli'

const inputPath = `${path}/src/app/api/graphql/schema/schema.graphql` // globも可
const dist = `${path}/src/app/api/graphql/dist`

const config: CodegenConfig = {
  generates: {
    [`${dist}/graphql.schema.json`]: {
      plugins: ['introspection'],
    },
    [`${dist}/index.ts`]: {
      config: {
        enumsAsConst: true,
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
  hooks: {
    beforeAllFileWrite: () => {
      const typesArray = loadFilesSync(inputPath)
      const schema = print(mergeTypeDefs(typesArray))

      try {
        outputFileSync(`${dist}/schema.graphql`, schema)
        outputFileSync(`${dist}/schema.ts`, `export default \`${schema}\``)
        outputFileSync(
          `${dist}/index.ts`,
          `export * from './dist'\nexport { default as typeDefs } from './dist/schema'\n`,
        )
      } catch (error) {
        eslintDisableConsole.error(error)
      }
    },
  },
  overwrite: true,
  schema: inputPath,
}

export default config

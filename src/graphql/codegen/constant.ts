import { path } from 'app-root-path'
import { readFileSync } from 'fs-extra'

export const gqlPath = `${path}/src/graphql`
export const schemaPath = `${gqlPath}/schema/schema.graphql` // globも可
export const generatedServerPath = `${gqlPath}/generated/server`
export const generatedServerDistPath = `${gqlPath}/generated/server/dist`
export const generatedClientPath = `${gqlPath}/generated/front`
export const generatedClientDistPath = `${gqlPath}/generated/front/dist`
export const commonType = readFileSync(`${gqlPath}/commonType.ts`, 'utf8')

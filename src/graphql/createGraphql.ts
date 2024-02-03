import { readFileSync } from 'fs-extra'
import { createSchema, createYoga } from 'graphql-yoga'
import { resolvers } from './resolvers'

const typeDefs = readFileSync('./src/graphql/generated/server/dist/schema.graphql', 'utf8')

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createGraphql = () => {
  const { handleRequest } = createYoga({
    fetchAPI: { Response },
    graphqlEndpoint: '/api/graphql',
    schema: createSchema({
      resolvers,
      typeDefs,
    }),
  })

  return handleRequest
}

import { createSchema, createYoga } from 'graphql-yoga'

const { handleRequest } = createYoga({
  fetchAPI: { Response },
  graphqlEndpoint: '/api/graphql',
  schema: createSchema({
    resolvers: {
      Query: {
        greetings: () => 'This is the `greetings` field of the root `Query` type',
      },
    },
    typeDefs: `
      type Query {
        greetings: String
      }
    `,
  }),
})

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS }

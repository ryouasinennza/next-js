import { createGraphql } from '../../../graphql/createGraphql'

const handleRequest = createGraphql()

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS }

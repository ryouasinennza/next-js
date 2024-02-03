import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { print } from 'graphql/index'
import { ASTNode, Kind, OperationDefinitionNode } from 'graphql/index'

type FetcherRequest = {
  operationName: string | null
  query: string
  variables: Record<string, never>
}

type EmptyTVariables = {
  //no-op
}

type CreateGraphQLRequest = <TResult, TVariables = EmptyTVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables: TVariables | undefined,
) => FetcherRequest | null

export const createGraphQLRequest: CreateGraphQLRequest = (document, variables) => {
  const operationDefinitionNode = document.definitions.find(
    (def: ASTNode): def is OperationDefinitionNode => def.kind === Kind.OPERATION_DEFINITION,
  )

  return {
    operationName: operationDefinitionNode?.name?.value || null,
    query: print(document),
    variables: variables || {},
  }
}

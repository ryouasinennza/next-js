import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { ASTNode, Kind, OperationDefinitionNode, print } from 'graphql/index'
import { FetcherErrors } from './errors'
import { graphQLFetcher } from './graphQLFetcher'

type EmptyTVariables = {
  //no-op
}

type Events<TResponse> = {
  onError?: (error: FetcherErrors) => Promise<void>
  onSuccess?: (data: TResponse) => Promise<void>
}

// type Variables<TVariables> = TVariables extends Record<string, never> ? [] : [TVariables]

export type FetchFunction<TResult, TVariables> = (
  events: Events<TResult>,
  variables: TVariables | undefined,
) => Promise<TResult | undefined>

export const createGraphQLFetcher = <TResult, TVariables = EmptyTVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
): FetchFunction<TResult, TVariables> => {
  const fetcher = graphQLFetcher<TResult>((request) => fetch(request))
  const operationDefinitionNode = document.definitions.find(
    (def: ASTNode): def is OperationDefinitionNode => def.kind === Kind.OPERATION_DEFINITION,
  )
  return async (events, variables) => {
    return fetcher(
      {
        operationName: operationDefinitionNode?.name?.value || null,
        query: print(document),
        variables: variables || {},
      },
      events,
    )
  }
}

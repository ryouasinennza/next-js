/* eslint-disable @typescript-eslint/no-explicit-any */
import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import useSWR, { SWRConfiguration, SWRResponse } from 'swr'
import useSWRImmutable from 'swr/immutable'
import { createGraphQLFetcher } from '../createGraphQLFetcher'
import { createGraphQLRequest } from '../createGraphQLRequest'
import { FetcherErrors } from '../errors'

type EmptyTVariables = {
  //no-op
}

type Events<TResponse> = {
  onError?: (error: FetcherErrors) => Promise<void>
  onSuccess?: (data: TResponse) => Promise<void>
}

type SWRHandler<TResult, TVariables> = (
  config?: SWRConfiguration<TResult, FetcherErrors>,
  variables?: TVariables,
) => SWRResponse<TResult, FetcherErrors>

type FetcherHandler<TResult, TVariables> = (
  events: Events<TResult>,
  variables?: TVariables,
) => Promise<TResult | undefined>

type Return<TResult, TVariables> = {
  graphqlFetcher: FetcherHandler<TResult, TVariables>
  useSWRHook: SWRHandler<TResult, TVariables>
  useSWRImmutableHook: SWRHandler<TResult, TVariables>
}

/**
 * useSWRHook useSWRImmutableHook は hooks なので使用する際は実行する場所に気をつけてください（クリックイベントで動くようなところで実行しない）
 * graphqlFetcher は hooks ではないので ライフサイクル が行われるようなところには置かないでください かつ 使用するさいは useCallbackでメモ化してください
 */
export const useGraphqlClient = <TResult, TVariables = EmptyTVariables>(
  graphqlDocument: TypedDocumentNode<TResult, TVariables>,
): Return<TResult, TVariables> => {
  return {
    graphqlFetcher: createGraphQLFetcher<TResult, TVariables>(graphqlDocument),
    useSWRHook: (config, variables) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useSWR<TResult, FetcherErrors>(
        createGraphQLRequest<TResult, TVariables>(graphqlDocument, variables),
        config,
      )
    },
    useSWRImmutableHook: (config, variables) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useSWRImmutable<TResult, FetcherErrors>(
        createGraphQLRequest<TResult, TVariables>(graphqlDocument, variables),
        config,
      )
    },
  }
}

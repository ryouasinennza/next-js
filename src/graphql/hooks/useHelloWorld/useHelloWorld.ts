import { eslintDisableConsole } from '../../../utils/eslintDisableConsole'
import { graphql } from '../../generated/front'
import { GetHelloWorldQuery } from '../../generated/front/types'
import { graphQLFetcher, useGraphqlClient } from '../../graphqlClient'

const getUserQuery = graphql(`
  query GetHelloWorld {
    helloWorld {
      id
      message
    }
  }
`)

type UseHelloWorldReturn = {
  data: GetHelloWorldQuery | undefined
}

type UseHelloWorld = () => UseHelloWorldReturn

export const useHelloWorld: UseHelloWorld = () => {
  const fetcher = graphQLFetcher((request) => fetch(request))
  const { useSWRImmutableHook } = useGraphqlClient<GetHelloWorldQuery>(getUserQuery)
  const { data } = useSWRImmutableHook({
    fetcher,
    onSuccess: (data) => {
      eslintDisableConsole.log(data)
    },
  })
  return { data }
}

import useSWR from 'swr'
import { SWRResponse } from 'swr/dist/types'

type Response = {
  login: boolean
}

type UseLoginLogout = () => SWRResponse<Response>

export const useLoginLogout: UseLoginLogout = () => {
  return useSWR<Response>('/api/login_logout')
}

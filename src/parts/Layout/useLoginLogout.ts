import useSWR from 'swr'
import { SWRResponse } from 'swr'

type Response = {
  login: boolean
}

type UseLoginLogout = () => SWRResponse<Response>

export const useLoginLogout: UseLoginLogout = () => {
  console.log('')
  return useSWR<Response>('/api/login_logout')
}

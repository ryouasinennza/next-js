import { ReactElement } from 'react'
import { eslintDisableConsole } from '../../utils/eslintDisableConsole'
import { ClientComponent } from './ClientComponent'

const getData = async (): Promise<{ name: string }> => {
  return {
    name: 'server data',
  }
}

const Page = async (): Promise<ReactElement> => {
  const data = await getData()
  eslintDisableConsole.log(data)
  return (
    <div>
      <ClientComponent>{data.name}</ClientComponent>
    </div>
  )
}

export default Page

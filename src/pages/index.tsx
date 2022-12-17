import styled from 'styled-components'
import useSWR from 'swr'
import { Counter } from '../parts/Counter'
import { CustomNextPage } from '../types/CustomNextTypes'

type GetNameResponse = {
  name: string
}

const Home: CustomNextPage = ({ themeToggle }) => {
  const { data, error, isLoading } = useSWR<GetNameResponse>('/api/getName')

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <Wrap>
      <button onClick={() => themeToggle()}>テーマを変える</button>
      <div>{data && data.name}</div>
      <Counter countText="加算減算" upDownText="加算減算切替" />
    </Wrap>
  )
}

export default Home

const Wrap = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px;
`

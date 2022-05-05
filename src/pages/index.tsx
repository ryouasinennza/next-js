import { NextPage } from 'next'
import { Counter } from '../parts'

const Home: NextPage = () => {
  return <Counter countText="加算減算" upDownText="加算減算切替" />
}

export default Home

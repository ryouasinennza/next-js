import { GetServerSideProps } from 'next'
import { Layout } from '../parts/Layout'
import { NextPageWithLayout } from './_app'
// import { useLoginLogout } from '../parts/Layout/useLoginLogout'

type Props = {
  name: string
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/dummy`)
  const data = await res.json()
  // eslint-disable-next-line no-console
  console.log('リクエストで毎回動く')
  return {
    props: data,
  }
}

const GetServerSide: NextPageWithLayout<Props> = ({ name }) => {
  // const { data } = useLoginLogout()
  // console.log('Page', data)
  return (
    <div>
      <div>npm run build → npm start を実行</div>
      <div>ターミナルに リクエストで毎回動く の文字が出るのを確認できます</div>
      <div>{name}</div>
    </div>
  )
}

// layoutにすることによってページ移動時にLayout内のfetchが動かないmemo化？される
GetServerSide.getLayout = (page) => <Layout title="home">{page}</Layout>

export default GetServerSide

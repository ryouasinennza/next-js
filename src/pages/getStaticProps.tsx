import { GetStaticProps } from 'next'
import { Layout } from '../parts/Layout'
import { NextPageWithLayout } from './_app'
// import { useLoginLogout } from '../parts/Layout/useLoginLogout'

type Props = {
  size: string
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(`https://google.com/`)
  const props = JSON.stringify(res)

  // eslint-disable-next-line no-console
  console.log('このログは出ない')
  return {
    props: { size: String(props) },
  }
}

const GetStatic: NextPageWithLayout<Props> = ({ size }) => {
  // const { data } = useLoginLogout()
  // console.log('Page', data)
  return (
    <div>
      <div>npm run build → npm start を実行</div>
      <div>ターミナルに このログは出ない の文字が出ないのを確認できます</div>
      <div>{size}</div>
    </div>
  )
}

// layoutにすることによってページ移動時にLayout内のfetchが動かないmemo化？される
GetStatic.getLayout = (page) => <Layout title="GetStatic">{page}</Layout>

export default GetStatic

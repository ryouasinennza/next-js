import { GetStaticProps, NextPage } from 'next'

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

const Home: NextPage<Props> = ({ size }) => {
  return (
    <div>
      <div>npm run build → npm start を実行</div>
      <div>ターミナルに このログは出ない の文字が出ないのを確認できます</div>
      <div>{size}</div>
    </div>
  )
}

export default Home

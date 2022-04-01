import { GetStaticPaths } from 'next'
import { client } from '../microCMS'

type PathsProps = {
  id: string
}

type MicroCMSDate = {
  contents: {
    id: string
  }[]
}

export const getStaticPaths: GetStaticPaths<PathsProps> = async () => {
  const endpoint = process.env.BLOG_ENDPOINT || 'blog'
  const data = await client.get<MicroCMSDate>({ endpoint })
  const paths = data.contents.map((content) => `/${endpoint}/${content.id}`)

  return {
    fallback: false,
    paths,
  }
}

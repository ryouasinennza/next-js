import { GetRequest } from 'microcms-js-sdk/dist/cjs/types'
import { GetStaticProps } from 'next'
import { BlogProps } from '../../types'
import { client } from '../microCMS'

type StaticParams = {
  id: string
}

export const getStaticPropsBlogDetail: GetStaticProps<BlogProps, StaticParams> = async (context) => {
  const requestParams: GetRequest = {
    contentId: context.params?.id || '',
    endpoint: process.env.BLOG_ENDPOINT || 'blog',
  }
  const blog = await client.get(requestParams)

  return {
    props: {
      blog,
    },
  }
}

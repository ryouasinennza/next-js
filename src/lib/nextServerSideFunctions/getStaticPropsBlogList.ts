import { GetStaticProps } from 'next'
import { BlogListProps } from '../../types'
import { client } from '../microCMS'

export const getStaticPropsBlogList: GetStaticProps<BlogListProps> = async () => {
  const blogList = await client.get<BlogListProps>({ endpoint: 'blog' })

  return {
    props: blogList,
  }
}

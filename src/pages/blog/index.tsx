import { GetStaticProps, NextPage } from 'next'
import NextLink from 'next/link'
import { client, endpoint, getPagePath, GetPagePathReturn } from '../../lib'
import { BlogListProps } from '../../types'

type Props = {
  blogList: BlogListProps
  pages: GetPagePathReturn
}

const pages = getPagePath()

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogList = await client.get<BlogListProps>({ endpoint })

  return {
    props: { blogList, pages },
  }
}

const Home: NextPage<Props> = ({ blogList }) => {
  return (
    <>
      <ul>
        {blogList.contents.map((blog) => {
          return (
            <li key={blog.id}>
              <NextLink href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </NextLink>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Home

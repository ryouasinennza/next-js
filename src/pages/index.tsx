import { NextPage } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import { BlogListProps } from '../types'
export { getStaticPropsBlogList as getStaticProps } from '../lib'

const Home: NextPage<BlogListProps> = ({ contents }) => {
  return (
    <>
      <Head>
        <title>MyBlog</title>
      </Head>
      <ul>
        {contents.map((blog) => {
          return (
            <li key={blog.id}>
              <NextLink href={`/blog/${blog.id}`}>
                <a>archive{blog.title}</a>
              </NextLink>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Home

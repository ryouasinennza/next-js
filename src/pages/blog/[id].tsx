import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import styled from 'styled-components'
import { client, endpoint, getPagePath, GetPagePathReturn } from '../../lib'
import { devices } from '../../style'
import { BlogContent, BlogListProps } from '../../types'

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<BlogListProps>({ endpoint })
  const paths = data.contents.map((content) => `/blog/${content.id}`)

  return {
    fallback: false,
    paths,
  }
}

type StaticParams = {
  id: string
}

type BlogProps = {
  blog: BlogContent
  pages: GetPagePathReturn
}

const pages = getPagePath()

export const getStaticProps: GetStaticProps<BlogProps, StaticParams> = async (context) => {
  const blog = await client.get<BlogContent>({
    contentId: context.params?.id || '',
    endpoint: process.env.BLOG_ENDPOINT || 'blogs',
  })
  return {
    props: {
      blog,
      pages,
    },
  }
}

const Blog: NextPage<BlogProps> = ({ blog }) => {
  return (
    <>
      <Content>
        <Title>{blog.title}</Title>
        <Body dangerouslySetInnerHTML={{ __html: blog.content }} />
      </Content>
    </>
  )
}

const Content = styled('div')`
  margin: 0 auto;
`

const Body = styled.div`
  margin-top: 60px;
`

const Title = styled('h1')`
  margin-top: 60px;
  font-size: 40px;

  @media ${devices.tablet} {
    font-size: 50px;
  }
`

export default Blog

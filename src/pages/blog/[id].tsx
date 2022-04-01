import { NextPage } from 'next'
import { BlogProps } from '../../types'
export { getStaticPaths, getStaticPropsBlogDetail as getStaticProps } from '../../lib'

const Blog: NextPage<BlogProps> = ({ blog }) => {
  return (
    <div>
      <div>{blog.title}</div>
      <div dangerouslySetInnerHTML={{ __html: blog.body }} />
    </div>
  )
}

export default Blog

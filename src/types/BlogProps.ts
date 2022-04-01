type Blog = {
  [key: string]: string
}

export type BlogProps = {
  blog: Blog
}

export type BlogListProps = {
  contents: Blog[]
  limit: number
  offset: number
  totalCount: number
}

type Eyecatch = {
  height: number
  url: string
  width: number
}

type Category = {
  createdAt: string
  id: string
  name: string
  publishedAt: string
  revisedAt: string
  updatedAt: string
}

export type BlogContent = {
  category: Category
  content: string
  createdAt: string
  eyecatch: Eyecatch
  id: string
  publishedAt: string
  revisedAt: string
  title: string
  updatedAt: string
}

export type BlogListProps = {
  contents: BlogContent[]
  limit: number
  offset: number
  totalCount: number
}

import root from 'app-root-path'
import { readSync } from 'readdir'

type link = {
  text: string
  url: string
}

export type GetPagePathReturn = link[]

export const getPagePath = (): GetPagePathReturn => {
  return readSync(`${root}/src/pages`)
    .filter((name) => !/_app|_document/.test(name))
    .filter((name) => !/]\.tsx/g.test(name))
    .map((name) => {
      const filePath = name.replace('.tsx', '').replace(/\[.*?]/, '')
      const text = filePath === 'index' ? 'home' : filePath.replace(/^\//, '').replace(/\/$/, '').replace('/index', '')
      const url = text === 'home' ? '/' : `/${text}`
      return {
        text,
        url,
      }
    })
}

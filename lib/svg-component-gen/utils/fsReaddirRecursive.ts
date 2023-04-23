import fs from 'node:fs'
import path from 'node:path'

type Filter = (value: string, index: number, dir: string) => boolean

type FsReaddirRecursive = (root: string, filter?: Filter, files?: string[], prefix?: string) => string[]

export const fsReaddirRecursive: FsReaddirRecursive = (root, filter, files = [], prefix = ''): string[] => {
  const dir = path.join(root, prefix)

  if (!fs.existsSync(dir)) {
    return files
  }

  if (fs.statSync(dir).isDirectory()) {
    const array = fs.readdirSync(dir).filter((value, index) => {
      if (!filter) {
        return true
      }
      return filter(value, index, dir)
    })

    for (const name of array) {
      fsReaddirRecursive(root, filter, files, path.join(prefix, name))
    }
  } else {
    files.push(prefix)
  }

  return files
}

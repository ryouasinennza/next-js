import fs from 'node:fs'
import root from 'app-root-path'

type ReadFileContent = (fileName: string) => Promise<string>

const dirName = `${root}/markdown/`

export const readFileContent: ReadFileContent = async (fileName) => {
  return fs.readFileSync(`${dirName}${fileName}.md`, 'utf8')
}

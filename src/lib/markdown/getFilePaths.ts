import fs from 'node:fs'
import root from 'app-root-path'

type GetFilePaths = () => Promise<
  {
    params: {
      id: string
    }
  }[]
>

const dirName = `${root}/markdown/`

export const getFilePaths: GetFilePaths = async () => {
  const paths = []
  const fileNames = fs.readdirSync(dirName, 'utf8')
  for (const fileName of fileNames) {
    paths.push({
      params: {
        id: fileName.replace('.md', ''),
      },
    })
  }

  return paths
}

import * as child_process from 'node:child_process'
import { dirname } from 'node:path'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { outputFileSync } from 'fs-extra'
import { fsReaddirRecursive } from './utils/fsReaddirRecursive'

const distDir = dirname(fileURLToPath(import.meta.url))
const cliDir = dirname(distDir)
const libDir = dirname(cliDir)
const rootDir = dirname(libDir)

const pathObject = {
  cliDir,
  distDir,
  libDir,
  publicDir: `${rootDir}/public`,
  rootDir,
  srcDir: `${rootDir}/src`,
}

const relativePath = path.relative(`${pathObject.srcDir}/parts/Icons`, pathObject.publicDir)

const toUpperCamelCase = (str: string): string => {
  return str.replace(/^\w|[A-Z]|\b\w/g, function (word, index) {
    return index == 0 ? word.toUpperCase() : word.toUpperCase().replace(/\s+/g, '')
  })
}

const fileNames = fsReaddirRecursive(`${pathObject.publicDir}/svgs`).map((fileName) => fileName.replace('.svg', ''))

let text = "import { FC, SVGProps } from 'react'\n"

for (const fileName of fileNames) {
  text = text + `import ${toUpperCamelCase(fileName)} from '${relativePath}/svgs/${fileName}.svg'\n`
}

text = text + '\n'
text = text + 'type SvgComponent = FC<SVGProps<SVGElement>>\n'
text = text + '\n'

text = text + `export type SvgComponents = {\n`
for (const fileName of fileNames) {
  text = text + `${fileName}: SvgComponent\n`
}
text = text + `}\n`
text = text + `\n`

text = text + `export const svgComponents: SvgComponents = {\n`
for (const fileName of fileNames) {
  text = text + `${fileName}: ${toUpperCamelCase(fileName)},\n`
}
text = text + `}\n`

text = text + `\n`
text = text + `export const svgComponentsKeys = Object.keys(svgComponents) as (keyof SvgComponents)[]\n`
text = text + `\n`

outputFileSync(`${rootDir}/src/parts/Icons/svgComponents.tsx`, text)

child_process.execSync(`pnpm prettier --write ${rootDir}/src/parts/Icons/svgComponents.tsx`)

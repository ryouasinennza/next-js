import fs from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { fsReaddirRecursive } from './fsReaddirRecursive'

const filePath = fileURLToPath(import.meta.url)
const fileDir = dirname(filePath)
const parentDir = dirname(fileDir)

describe('fsReaddirRecursive', () => {
  it('フォルダー内のファイル名が取得できること', () => {
    expect(fsReaddirRecursive(fileDir)).toHaveLength(3)
  })

  it('ファイルをフィルターできること', () => {
    const files = fsReaddirRecursive(fileDir, (name) => {
      return name !== 'fsReaddirRecursive.test.ts'
    })

    expect(files).toHaveLength(2)
  })

  it('ディレクトリををフィルターできること', () => {
    const files = fsReaddirRecursive(parentDir, (name, index, dir) => {
      return dir !== 'fsReaddirRecursive'
    })
    expect(files.includes('fsReaddirRecursive')).toBeFalsy()
  })

  it('シンボリックリンクされたファイルでも動作すること', () => {
    const linkName = filePath + '-link'
    fs.symlinkSync(filePath, linkName, 'file')

    try {
      expect(fsReaddirRecursive(fileDir)).toHaveLength(4)
    } catch (error) {
      throw error
    } finally {
      fs.unlinkSync(linkName)
    }
  })

  it('シンボリックリンクされたディレクトリでも動作すること', () => {
    const linkName = fileDir + '-link'
    fs.symlinkSync(fileDir, linkName, 'dir')

    try {
      expect(fsReaddirRecursive(linkName)).toHaveLength(3)
    } catch (error) {
      throw error
    } finally {
      fs.unlinkSync(linkName)
    }
  })

  it('シンボリックリンクされたディレクトリでもフィルターが動作すること', () => {
    const linkName = parentDir + '-link'
    fs.symlinkSync(parentDir, linkName, 'dir')
    try {
      const files = fsReaddirRecursive(linkName, function (name) {
        return name !== 'fsReaddirRecursive'
      })

      expect(files.includes('fsReaddirRecursive')).toBeFalsy()
    } catch (error) {
      throw error
    } finally {
      fs.unlinkSync(linkName)
    }
  })

  it('中に存在しないシンボリックリンクを無視すること', () => {
    const linkName = filePath + '-link'
    const emptyName = filePath + '-empty'

    try {
      fs.writeFileSync(emptyName, 'empty')
      fs.symlinkSync(emptyName, linkName, 'dir')
      fs.unlinkSync(emptyName)

      expect(fsReaddirRecursive(fileDir)).toHaveLength(3)
    } catch (error) {
      throw error
    } finally {
      fs.unlinkSync(linkName)
    }
  })

  it('ディレクトリが存在しなければ空の配列を返すこと', () => {
    expect(fsReaddirRecursive('non-exist-dir')).toHaveLength(0)
  })
})

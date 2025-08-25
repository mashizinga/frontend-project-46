import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const parseFile = (filepath) => {
  const absolutePath = path.resolve(__dirname, '..', '__fixtures__', filepath)
  const content = fs.readFileSync(absolutePath, 'utf-8')
  const extensionFile = path.extname(filepath).toLowerCase()

  if (extensionFile === '.json') {
    return JSON.parse(content)
  }
}

export default parseFile

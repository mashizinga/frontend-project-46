import fs from 'fs'
import path from 'path'

const parseFile = (filepath) => {
    const absolutePath = path.resolve(process.cwd(), filepath)
    const content = fs.readFileSync(absolutePath, 'utf-8')
    const extFile = path.extname(filepath).toLoweCase()

    if (extFile === '.json') {
        return JSON.parse(content)
    }
}

export default parseFile

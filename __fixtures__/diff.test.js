import path from 'path'
import { fileURLToPath } from 'url'
import diff from '../src/diff.js'
import { test, expect } from '@jest/globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

test('gendiff compares two JSON files correctly', () => {
  const filepath1 = path.join(__dirname, 'file1.json')
  const filepath2 = path.join(__dirname, 'file2.json')

  const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`

  const result = diff(filepath1, filepath2)

  expect(result).toBe(expected)
})

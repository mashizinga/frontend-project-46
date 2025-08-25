import parseFile from './parsing.js'
import _ from 'lodash'

const diff = (filepath1, filepath2) => {
  const parsingFile1 = parseFile(filepath1)
  const parsingFile2 = parseFile(filepath2)

  const keys = _.union(_.keys(parsingFile1), _.keys(parsingFile2))
  const sortKeys = _.sortBy(keys)

  const differences = sortKeys.reduce((acc, key) => {
    const hasFile1 = _.has(parsingFile1, key)
    const hasFile2 = _.has(parsingFile2, key)
    const valueFile1 = parsingFile1[key]
    const valueFile2 = parsingFile2[key]

    if (hasFile1 && !hasFile2) {
      acc.push(`  - ${key}: ${valueFile1}`)
    }
    else if (!hasFile1 && hasFile2) {
      acc.push(`  + ${key}: ${valueFile2}`)
    }
    else if (!_.isEqual(valueFile1, valueFile2)) {
      acc.push(`  - ${key}: ${valueFile1}`)
      acc.push(`  + ${key}: ${valueFile2}`)
    }
    else {
      acc.push(`    ${key}: ${valueFile1}`)
    }
    return acc
  }, [])

  const result = `{\n${differences.join('\n')}\n}`

  return result
}

export default diff

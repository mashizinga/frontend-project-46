#!/usr/bin/env node
import { program } from 'commander'
import diff from '../src/diff.js'

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'display help for command')
  .action((filepath1, filepath2) => {
    const result = diff(filepath1, filepath2)
    console.log(result)
  })

program.parse()

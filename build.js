// Modules
const fs = require('fs')
const path = require('path')
const boxen = require('boxen')
const chalk = require('chalk')

// Styling
const info = chalk.cyan
const label = chalk.gray.bold
const url = chalk.gray
const card = chalk.green
const white = chalk.white
const opts = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Write card to output file
fs.writeFileSync(path.join(__dirname, 'bin/out'), card(boxen(create(), opts)))

// Create card string
function create() {
  const name = white('dubldee')
  const bio = white('I write code and play games')
  const email = label('Email:  ') + info('imdubldee@gmail.com')
  const github = label('GitHub:  ') + url('https://github.com/') + info('dubldee')
  const npmjs = label('npm:  ') + url('https://npmjs.com/') + info('~dubldee')
  const twitter = label('Twitter:  ') + url('https://twitter.com/') + info('imdubldee')
  const card = label('Card:  ') + info('npx dubldee')

  // Formatting helpers
  const nl = '\n'
  const pad2 = '  '
  const pad10 = '          '

  return pad10 + name + nl + nl +
    pad10 + bio + pad10 + nl + nl +
    '   ' + email + nl +
    pad2 + github + nl +
    '     ' + npmjs + nl + 
    ' ' + twitter + nl + nl +
    '    ' +  card
}

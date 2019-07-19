const boxen = require('boxen')
const chalk = require('chalk')
const info = chalk.cyan
const label = chalk.gray.bold
const url = chalk.gray
const white = chalk.white
const card = chalk.green
const opts = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}


console.log(card(boxen(create(), opts)))

function create() {
  // Labels
  const lEmail = label('Email: ')
  const lGitHub = label('GitHub: ')
  const lNpmjs = label('npm: ')
  const lCard = label('Card: ')

  // Info
  const name = info('dubldee')
  const bio = info('I write code and play games')
  const email = info('imdubldee@gmail.com')
  const github = url('https://github.com/') + info('dubldee')
  const npmjs = url('https://npmjs.com/') + info('~dubldee')
  const card = info('npx dubldee')

  // Formatting helpers
  const nl = '\n'
  const ws = ' '
  const pad2 = '  '
  const pad4 = '    '
  const pad6 = '      '
  const pad10 = '          '

  return pad10 + name + nl + nl +
    pad10 + bio + pad10 + nl + nl +
    ws + pad2 + lEmail + email + nl +
    pad2 + lGitHub + github + nl +
    ws + pad4 + lNpmjs + npmjs + nl + nl + 
    pad4 + lCard + card
}

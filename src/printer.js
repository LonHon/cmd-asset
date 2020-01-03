const colors = require('colors')

function print (code, info) {
  const str = `now: ${info.now_gz}(${info.now_gz_per}), last: ${info.last_day_gz}(${info.last_day_gz_per}) --- ${info.title}`
  let printStr = ''
  if (info.now_gz < info.last_day_gz) printStr = colors.green('  ↓  ' + str)
  else printStr = colors.red('  ↑  ' + str)
  console.log(printStr)
}

module.exports = print

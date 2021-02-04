const { exec } = require('child_process')
console.log(exec)
function gitCommond(commond = '') {
  return new Promise(resolve => exec(commond, (err, stdout) => {
    if (err) {
      console.log(chalk.red(err))
      process.exit(1)
    } else {
      const result = String(stdout).trim()
      resolve(result)
    }
  }).stdout)
}

async function getLatestTag() {
  const gitRes = await gitCommond('git describe')
  const tag = String(gitRes).trim()
  const isOK = /^v\d{6}(-\d)?$/.test(tag)
  if (!isOK) {
    return [{}, null]
  }
  return [null, tag]
}

exports.getLatestTag = getLatestTag
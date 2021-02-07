const { exec } = require('child_process')
function gitCommond(commond = '') {
  return new Promise(resolve => exec(commond, (err, stdout) => {
    if (err) {
      console.log(chalk.red(err))
    } else {
      const result = String(stdout).trim()
      resolve(result)
    }
  }).stdout)
}

async function getLatestTag() {
  const gitRes = await gitCommond('git describe')
  const tag = String(gitRes).trim()
  // const isOK = /^v\d{6}(-\d)?$/.test(tag)
  if (!tag) {
    return [{}, null]
  }
  return [null, tag]
}
function getCurrentBranch() {
  // return gitCommond('git branch --show-current')
  return gitCommond('git rev-parse --abbrev-ref HEAD')
}
exports.getLatestTag = getLatestTag
exports.getCurrentBranch = getCurrentBranch
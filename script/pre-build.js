const fs = require('fs')
const { getLatestTag } = require('./utils');

// 开始
(async () => {
	const [err, latestTag] = await getLatestTag()
	fs.appendFileSync('.env.production', `\nVUE_APP_BUILD_VERSION=${latestTag}`)
})()
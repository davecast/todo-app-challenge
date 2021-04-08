const path = require('path')

module.exports = {
  future: {
    webpack5: true,
  },
  target: 'serverless',
  webpack(config) {
    config.resolve.modules.push(path.resolve('./'))
    return config
  },
}

'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"//192.168.100.121/api"'  // 测试用的地址(npm run dev的时候调用)
})

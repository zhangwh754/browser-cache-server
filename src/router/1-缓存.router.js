const Router = require('koa-router')
const { getTextFileData, getTextFileStatus } = require('../middleware/1-缓存.middleware')
const { powerCache, chatCache } = require('../controller/1-缓存.controller')

const Cache = new Router({ prefix: '/cache' })

Cache.get('/power', getTextFileData, powerCache) // 强缓存
Cache.get('/chat', getTextFileStatus, getTextFileData, chatCache) // 协商缓存

module.exports = Cache

class CacheController {
  async powerCache(ctx, next) {
    const res = ctx.fileData
    ctx.set('content-type', 'text/html; charset=utf-8')
    ctx.set('Cache-Control', 'max-age=3') //设置强缓存，过期时间为100秒
    ctx.body = res
    console.log('越过了强缓存')
  }

  async chatCache(ctx, next) {
    const res = ctx.fileData
    const status = ctx.fileStatus
    const ifModifiedSince = ctx.request.header['if-modified-since']
    if (ifModifiedSince && ifModifiedSince === status.mtime.toGMTString()) {
      ctx.status = 304
      return
    }
    ctx.set('content-type', 'text/html; charset=utf-8')
    ctx.set('Last-Modified', status.mtime.toGMTString())
    ctx.body = res
    console.log('越过了协商缓存')
  }
}

module.exports = new CacheController()

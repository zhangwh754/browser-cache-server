const fs = require('fs')
const path = require('path')

/* 获取文件内容 */
const getTextFileData = async (ctx, next) => {
  const res = await new Promise(resolve => {
    fs.readFile(path.resolve('./fs/test.txt'), (_err, data) => {
      resolve(data)
    })
  })
  ctx.fileData = res
  await next()
}

/* 获取文件状态（更新时间） */
const getTextFileStatus = async (ctx, next) => {
  const res = await new Promise(resolve => {
    fs.stat(path.resolve('./fs/test.txt'), (_err, data) => {
      resolve(data)
    })
  })
  ctx.fileStatus = res
  await next()
}

module.exports = {
  getTextFileData,
  getTextFileStatus
}

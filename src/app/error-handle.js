const errorHandle = (err, ctx) => {
  let status, message
  switch (err.message) {
    default:
      status = 404
      message = 'NOT FOUND'
      break
  }
  ctx.status = status
  ctx.body = {
    errCode: status,
    errMsg: message
  }
}

module.exports = {
  errorHandle
}

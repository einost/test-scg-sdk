const moment = require('moment')
const colors = require('colors')

const eventLog = request => {
  const { responded, received, id } = request.info
  const method = request.method.toUpperCase()
  const url = `${request.url}`
  const headers = request.headers
  const body = request.payload || {}
  let response
  let error
  if (request && request.response && request.response._payload) {
    response = request.response._payload._data
  }
  if (request && request.response && request.response._error) {
    error = request.response._error.stack
  }
  const newLine = '*\n*\n*\n'
  let message = colors.cyan(`========== [${moment(received).format('YYYY-MM-DD HH:mm:ss.SSS')}] --> ${id} ==========\n`)
  message += newLine
  message += `method: ${method}\n`
  message += `url: ${url}\n`
  message += `headers: ${JSON.stringify(headers, null, 2)}\n`
  message += `body: ${JSON.stringify(body, null, 2)}\n`
  if (response) {
    message += `response: ${JSON.stringify(JSON.parse(request.response._payload._data), null, 1)}\n`
  }
  if (error) {
    message += colors.red(`error: ${error}\n`)
  }
  message += newLine
  message += colors.cyan(`========== [${moment(responded).format('YYYY-MM-DD HH:mm:ss.SSS')}] <-- ${id} ==========\n`)
  console.log(message)
}

module.exports = {
  eventLog
}
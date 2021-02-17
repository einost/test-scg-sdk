const nodemailer = require('nodemailer')

const send = async ({
  from,
  to,
  subject,
  text,
  html
}) => {
  const testAccount = await nodemailer.createTestAccount()
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  })
  const info = await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html
  })
  return nodemailer.getTestMessageUrl(info)
}


module.exports = {
  send
}
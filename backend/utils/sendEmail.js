import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()
const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to,
    subject,
    text,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent:', info.response)
    return true
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}

export default sendEmail

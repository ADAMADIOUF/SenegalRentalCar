import mongoose from 'mongoose'
import sendEmail from '../utils/sendEmail.js'

const formDataSchema = new mongoose.Schema({
  nom: String,
  adresse: String,
  telephone: String,
  produit: String,
})

formDataSchema.post('save', async function (doc) {
  // This function will be called after saving a new FormData entry
  const emailSubject = 'New Form Data Submitted'
  const emailText = `A new form data entry has been submitted:\n\nName: ${doc.nom}\nAddress: ${doc.adresse}\nTelephone: ${doc.telephone}\nProduct: ${doc.produit}`

  // Replace 'recipient@example.com' with the email address you want to receive the notification
  const emailRecipient = 'adamadiouf2017@gmail.com'

  // Call the sendEmail function to send the notification email
  try {
    await sendEmail(emailRecipient, emailSubject, emailText)
    console.log('Notification email sent successfully.')
  } catch (error) {
    console.error('Error sending notification email:', error)
  }
})

const FormData = mongoose.model('FormData', formDataSchema)

export default FormData

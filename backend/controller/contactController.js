
import FormData from '../models/FormDataModel.js'

async function submitFormData(req, res) {
  const { nom, adresse, telephone, produit } = req.body

  try {
    const formData = new FormData({
      nom,
      adresse,
      telephone,
      produit,
    })

    const savedFormData = await formData.save()

    // You can send a response to the client indicating the successful form submission if needed
    res.json({ success: true, data: savedFormData })
  } catch (error) {
    console.error('Error saving form data:', error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
}

export default submitFormData

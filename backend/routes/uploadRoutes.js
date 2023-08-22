import express from 'express'
import multer from 'multer'
import path from 'path'

const router = express.Router()

// Multer Setup
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

// Multer Middleware
router.post('/', upload.array('images', 5), (req, res) => {
  const imagePaths = req.files.map((file) => `/${file.path}`)
  res.status(201).send({
    message: 'Images Uploaded',
    images: imagePaths,
  })
})

// Other routes and middleware...

// Helper Function to Check File Type
function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)
  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only')
  }
}

export default router

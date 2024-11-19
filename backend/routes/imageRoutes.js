const express = require('express');
const multer = require('multer');
const Image = require('../models/imageModels');
const path = require('path');

const router = express.Router();

// Set up multer for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage });

// Upload an image
router.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const newImage = new Image({
            imageName: req.file.filename,
            imagePath: req.file.path,
        });
        await newImage.save();
        res.status(201).json({ message: 'Image uploaded successfully!', image: newImage });
    } catch (err) {
        res.status(500).json({ message: 'Failed to upload image', error: err });
    }
});

// Get all images
router.get('/', async (req, res) => {
    try {
        const images = await Image.find();
        res.status(200).json(images);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch images', error: err });
    }
});

module.exports = router;

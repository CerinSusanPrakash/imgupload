const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    imageName: String,
    imagePath: String,
});

module.exports = mongoose.model('Image', imageSchema);

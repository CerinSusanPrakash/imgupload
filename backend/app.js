// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const imageRoutes = require('./routes/imageRoutes');
// const path = require('path');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use('/images', express.static(path.join(__dirname, 'images')));

// // Database Connection
// // mongoose.connect('mongodb://127.0.0.1:27017/imageDB', { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.connect('mongodb+srv://cerin-susan:cerinsusan@clusternew.aalc9so.mongodb.net/imageUploadDB?retryWrites=true&w=majority&appName=ClusterNew', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch((err) => console.log('Database connection error:', err));

// // Routes
// app.use('/api/images', imageRoutes);

// // Start Server
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const imageRoutes = require('./routes/imageRoutes');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

// Database Connection
mongoose.connect('mongodb+srv://cerin-susan:cerinsusan@clusternew.aalc9so.mongodb.net/imageUploadDB?retryWrites=true&w=majority&appName=ClusterNew')
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('Database connection error:', err));

// Routes
app.use('/api/images', imageRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

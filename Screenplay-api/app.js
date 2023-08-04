const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const characterRoutes = require('./routes/characters');
const relationRoutes = require('./routes/relations');
const propertyRoutes = require('./routes/properties');
const userRoutes = require('./routes/users');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
console.log('MONGODB_URI:', process.env.MONGODB_URI); // Log the MongoDB URI

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err.message);
    });
  

// Routes
app.use('/api/characters', characterRoutes);
app.use('/api/relations', relationRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

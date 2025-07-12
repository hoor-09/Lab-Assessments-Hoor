server.js code 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const temperatureRoutes = require('./routes/temperatureRoutes');

const app = express();
app.use(cors());
app.use(express.json());

console.log('Trying to connect to MongoDB...');

mongoose.connect('mongodb+srv://emmiebens:rafeandzade@kms.krrk3nc.mongodb.net/temperatures?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB successfully');

    // Start server ONLY after DB connection is successful
    app.listen(5000, () => {
      console.log('Server running on port 5000');
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Register routes (after defining app)
app.use('/api', temperatureRoutes);
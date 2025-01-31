const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const serverless = require('serverless-http');  // Import serverless-http package

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Configure CORS options
const corsOptions = {
    origin: process.env.CLIENT_URL || 'http://localhost:3000', // Environment variable for flexibility
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// Use authentication routes
app.use('/api/user', authRoutes);

// MongoDB connection and server initialization
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit on error
    }
};

connectDB();

// Check if the app is running on Vercel or locally
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000; // Set the port to 5000 if not defined
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

// Wrap the express app in the serverless-http handler for Vercel compatibility
module.exports.handler = serverless(app);

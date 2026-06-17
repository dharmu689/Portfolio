import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactRouter from './routes/contact.js';

// Initialize dotenv configuration
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));

// JSON Parser middleware
app.use(express.json());

// Routes Mount
app.use('/api/contact', contactRouter);

// Root route status checker
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend Running 🚀' });
});

// Database connection & Server listen
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

const isPlaceholder = !MONGO_URI.startsWith('mongodb://') && !MONGO_URI.startsWith('mongodb+srv://');

if (isPlaceholder) {
  console.warn('⚠️ Invalid or placeholder MONGO_URI detected. MongoDB connection skipped.');
} else {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log('MongoDB Connected ✅');
    })
    .catch((error) => {
      console.error('⚠️ MongoDB connection error:', error.message);
      console.log('Server is running without database features.');
    });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ✅`);
});

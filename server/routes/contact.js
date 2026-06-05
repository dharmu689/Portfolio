import express from 'express';
import Message from '../models/Message.js';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide all fields: name, email, message' });
    }

    // Save message to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Check if email notification parameters are configured
    if (process.env.EMAIL && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `New Portfolio Message from ${name}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Nodemailer error:', error);
        } else {
          console.log('Email notification sent:', info.response);
        }
      });
    }

    res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      data: newMessage,
    });
  } catch (error) {
    console.error('Contact route error:', error);
    res.status(500).json({ error: 'Server error, please try again later.' });
  }
});

export default router;

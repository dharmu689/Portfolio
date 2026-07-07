import express from 'express';
import { validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';
import Message from '../models/Message.js';
import { validateContact } from '../middleware/validateContact.js';

const router = express.Router();

router.post('/', validateContact, async (req, res) => {
  // STEP A: Check validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { name, email, subject, message } = req.body;

    // STEP B: Save to MongoDB (or fallback to local file if DB is offline)
    let dbSaved = false;
    if (mongoose.connection.readyState === 1) {
      try {
        const newMessage = new Message({ name, email, subject, message });
        await newMessage.save();
        dbSaved = true;
      } catch (err) {
        console.error('Error saving to MongoDB, using local fallback:', err);
      }
    }

    if (!dbSaved) {
      // Fallback: save to a local JSON file
      try {
        const fs = await import('fs/promises');
        const path = await import('path');
        const fallbackPath = path.resolve('messages_fallback.json');

        let existingMessages = [];
        try {
          const fileData = await fs.readFile(fallbackPath, 'utf-8');
          existingMessages = JSON.parse(fileData);
        } catch (readErr) {
          // File doesn't exist or is invalid
        }

        existingMessages.push({
          name,
          email,
          subject,
          message,
          receivedAt: new Date().toISOString()
        });

        await fs.writeFile(fallbackPath, JSON.stringify(existingMessages, null, 2), 'utf-8');
        console.log('Saved message to local fallback file messages_fallback.json ✅');
      } catch (fallbackErr) {
        console.error('Failed to save to local fallback file:', fallbackErr);
      }
    }

    // STEP C & D: Check email configurations and send notifications
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        family: 4, // Force IPv4
      });
      // const transporter = nodemailer.createTransport({
      //   service: 'gmail',

      //   auth: {
      //     user: process.env.EMAIL_USER,
      //     pass: process.env.EMAIL_PASS,
      //   },
      // });


      // Email options to portfolio owner
      const ownerMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
        subject: `📬 New Portfolio Message: ${subject}`,
        html: `
          <div style="background-color: #0A0F1E; color: #ffffff; font-family: sans-serif; padding: 24px; border-radius: 16px; max-width: 600px; margin: 0 auto; border: 1px solid #1E90FF;">
            <h2 style="color: #FF6B00; border-bottom: 2px solid #1E90FF; padding-bottom: 8px; margin-top: 0;">New Message Received on Portfolio 🚀</h2>
            <p style="margin-top: 16px;"><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #1E90FF; text-decoration: none;">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="background-color: #0D1B2A; padding: 16px; border-radius: 8px; border-left: 4px solid #FF6B00; margin: 16px 0;">
              <p style="margin: 0; white-space: pre-wrap; color: #A0AEC0;">${message}</p>
            </div>
            <p style="font-size: 12px; color: #A0AEC0; margin-bottom: 0;">Received on: ${new Date().toLocaleString()}</p>
          </div>
        `,
      };

      // Confirmation email to sender
      const senderMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `✅ Thanks for reaching out — Dharmu Kumar`,
        html: `
          <div style="background-color: #0A0F1E; color: #ffffff; font-family: sans-serif; padding: 24px; border-radius: 16px; max-width: 600px; margin: 0 auto; border: 1px solid #1E90FF;">
            <h2 style="color: #FF6B00; margin-top: 0;">Hey ${name}, Thanks for reaching out! 👋</h2>
            <p style="color: #A0AEC0; font-size: 16px; line-height: 1.5;">I have received your message and will get back to you within 24-48 hours.</p>
            
            <div style="background-color: #0D1B2A; padding: 16px; border-radius: 8px; border-left: 4px solid #1E90FF; margin: 20px 0;">
              <p style="margin: 0 0 8px 0; font-size: 11px; color: #1E90FF; font-weight: bold; text-transform: uppercase; tracking-wider;">Your Message:</p>
              <p style="margin: 0; white-space: pre-wrap; color: #A0AEC0; font-style: italic;">"${message}"</p>
            </div>
            
            <hr style="border: 0; border-top: 1px solid #1E90FF; opacity: 0.15; margin: 24px 0;" />
            
            <p style="margin: 0; font-weight: bold; font-size: 15px;">— Dharmu Kumar</p>
            <p style="margin: 4px 0 16px 0; color: #A0AEC0; font-size: 13px;">Full Stack Developer</p>
            
            <table border="0" cellpadding="0" cellspacing="0" style="margin: 0;">
              <tr>
                <td>
                  <a href="https://github.com/dharmu689" target="_blank" style="color: #1E90FF; text-decoration: none; font-size: 13px; font-weight: bold;">GitHub</a>
                </td>
                <td style="padding: 0 8px; color: #A0AEC0; font-size: 13px;">|</td>
                <td>
                  <a href="https://linkedin.com/in/dharmu689" target="_blank" style="color: #1E90FF; text-decoration: none; font-size: 13px; font-weight: bold;">LinkedIn</a>
                </td>
              </tr>
            </table>
          </div>
        `,
      };

      // Asynchronously send emails to not block client response
      transporter.sendMail(ownerMailOptions).catch(err => console.error('Owner email sending failed:', err));
      transporter.sendMail(senderMailOptions).catch(err => console.error('Sender confirmation email failed:', err));
    }

    // STEP E: Return success response
    res.status(201).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon. ✅",
    });

  } catch (error) {
    console.error('Contact route handler error:', error);
    res.status(500).json({ success: false, error: 'Server error, please try again later.' });
  }
});

export default router;

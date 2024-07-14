// routes/scheduledMessages.js
const express = require('express');
const router = express.Router();
const ScheduledMessage = require('../models/ScheduledMessage');

// POST route to schedule a new message
router.post('/schedule', async (req, res) => {
  const { sellerId, message, sendAt } = req.body;
  try {
    const newScheduledMessage = new ScheduledMessage({
      sellerId,
      message,
      sendAt
    });
    await newScheduledMessage.save();
    res.status(201).json(newScheduledMessage);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET route to fetch all scheduled messages for a seller
router.get('/seller/:sellerId', async (req, res) => {
  const { sellerId } = req.params;
  try {
    const scheduledMessages = await ScheduledMessage.find({ sellerId });
    res.json(scheduledMessages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

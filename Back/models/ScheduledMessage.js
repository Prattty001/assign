// models/ScheduledMessage.js
const mongoose = require('mongoose');

const ScheduledMessageSchema = new mongoose.Schema({
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seller',  // Reference to Seller model
    required: true
  },
  message: {
    type: String,
    required: true
  },
  sendAt: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ScheduledMessage', ScheduledMessageSchema);

// src/components/ScheduleMessageForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ScheduleMessageForm = ({ sellerId }) => {
  const [message, setMessage] = useState('');
  const [sendAt, setSendAt] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/scheduledMessages/schedule', {
        sellerId,
        message,
        sendAt
      });
      alert('Message scheduled successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to schedule message.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message..."
        required
      />
      <input
        type="datetime-local"
        value={sendAt}
        onChange={(e) => setSendAt(e.target.value)}
        required
      />
      <button type="submit">Schedule Message</button>
    </form>
  );
};

export default ScheduleMessageForm;

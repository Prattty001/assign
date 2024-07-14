// src/components/ScheduledMessagesList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ScheduledMessagesList = ({ sellerId }) => {
  const [scheduledMessages, setScheduledMessages] = useState([]);

  useEffect(() => {
    const fetchScheduledMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/scheduledMessages/seller/${sellerId}`);
        setScheduledMessages(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchScheduledMessages();
  }, [sellerId]);

  return (
    <div>
      <h2>Scheduled Messages</h2>
      <ul>
        {scheduledMessages.map((msg) => (
          <li key={msg._id}>
            <p>{msg.message}</p>
            <p>Scheduled at: {new Date(msg.sendAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduledMessagesList;

// src/App.js
import React from 'react';
import './App.css';
import ScheduleMessageForm from './Components/ScheduleMessageForm';
import ScheduledMessagesList from './Components/ScheduledMessagesList';


function App() {
  const sellerId = '60e15e9b967a2e3d58b619e0'; // Replace with actual seller ID

  return (
    <div className="App">
      <header className="App-header">
        <h1>WhatsApp Message Scheduler</h1>
      </header>
      <main>

        <ScheduleMessageForm sellerId={sellerId} />
        <ScheduledMessagesList sellerId={sellerId} />

      </main>
    </div>
  );
}

export default App;


import React, { useState } from 'react';
import './CreateActivity.css'; 

const CreateActivity = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    
    fetch('/api/activities', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, date }),
    })
      .then(response => response.json())
      .then(data => {
        onCreate(data);
        setTitle('');
        setDate('');
      });
  };

  return (
    <div className="create-activity">
      <h2>Create New Activity</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="Activity Title"
        />
        <input
          type="date"
          value={date}
          onChange={event => setDate(event.target.value)}
          placeholder="Activity Date"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateActivity;

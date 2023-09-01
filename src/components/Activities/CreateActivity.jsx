
import React, { useState } from 'react';

const CreateActivity = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    fetch('/api/activities', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    })
      .then(response => response.json())
      .then(data => {
        onCreate(data);
        setTitle('');
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateActivity;

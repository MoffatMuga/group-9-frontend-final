// Activities/ActivityList.js
import React, { useEffect, useState } from 'react';

const ActivityList = ({ onEdit, onDelete }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch activities from the API here
    // Example fetch call:
    fetch('/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data));
  }, []);

  return (
    <div className="activity-list">
      <h2>Previous Activities</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>
            {activity.title}
            <button onClick={() => onEdit(activity)}>Edit</button>
            <button onClick={() => onDelete(activity.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;

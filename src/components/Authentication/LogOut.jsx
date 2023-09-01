
import React from 'react';

const LogOut = ({ onLogOut }) => {
  const handleLogOut = () => {
   
    fetch('/api/logout', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => onLogOut());
  };

  return (
    <div className="log-out">
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default LogOut;

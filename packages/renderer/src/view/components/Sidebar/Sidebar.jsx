import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="main-section">
        <button>Home</button>
        <button>Books</button>
        <button>Settings</button>
      </div>
    </div>
  );
}

export default Sidebar;
import React from 'react';
import './Dropdown.css';

const Dropdown = ({isOpen, toggleDropdown}) => {
  return (
    <div className="dropdown-container">
      <button className="dropdown-toggle" onClick={toggleDropdown}>Profiles</button>
      <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
        <a href="#">Option 1</a>
        <a href="#">Option 2</a>
        <a href="#">Option 3</a>
      </div>
    </div>
  );
};

export default Dropdown;

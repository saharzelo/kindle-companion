import React from 'react';
import './Topbar.css';
import Dropdown from '../Dropdown/Dropdown';
import { useState } from 'react';

function Topbar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Topbar">
      <div className="user-info">
        Welcome: Shay Ventura
      </div>
      <div>
        <Dropdown isOpen={isOpen} toggleDropdown={toggleDropdown} />
      </div>

    </div>
  );
}

export default Topbar;
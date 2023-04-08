import './Topbar.css';
import Dropdown from '../Dropdown/Dropdown';
import { useState } from 'react';

function Topbar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="topbar">
      <div className="user-info">
        Welcome: <span>Guest</span>
      </div>
      <div>
        <Dropdown isOpen={isOpen} toggleDropdown={toggleDropdown} />
      </div>

    </div>
  );
}

export default Topbar;
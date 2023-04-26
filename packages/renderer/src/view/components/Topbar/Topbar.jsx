import Dropdown from '../Dropdown/Dropdown';
import format from '../../../controller/helpers/format';
import { useState } from 'react';
import './Topbar.css';


function Topbar({ fetchedProfiles, setProfile, seletedProfile }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="topbar">
      <div className="user-info">
        Welcome: <span>{seletedProfile && format.ucFirst(seletedProfile)}</span>
      </div>
      <div>
        <Dropdown options={fetchedProfiles} title={"Profiles"} onClick={setProfile} />
      </div>

    </div>
  );
}

export default Topbar;
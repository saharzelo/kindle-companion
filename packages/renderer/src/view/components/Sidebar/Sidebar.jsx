import React from 'react';
import './Sidebar.css';
import { ReactComponent as AppIcon } from '../../../public/icons/loginIcon.svg'

import { ReactComponent as BookSvg } from '../../../public/icons/Sidebar/book.svg'
import { ReactComponent as HomeSvg } from '../../../public/icons/Sidebar/home.svg'
import { ReactComponent as SettingsSvg } from '../../../public/icons/Sidebar/settings.svg'
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="app-logo"><AppIcon /></div>

      <div className="button-group">
        <HomeSvg />
      </div>
      <div className="button-group">
        <BookSvg />
      </div>
      <div className="button-group">
        <SettingsSvg />
      </div>
    </div>
  );
}

export default Sidebar;
import React from 'react';
import './Sidebar.css';
import { ReactComponent as AppIcon } from '../../../public/icons/loginIcon.svg'

import { ReactComponent as BookSvg } from '../../../public/icons/Sidebar/book.svg'
import { ReactComponent as HomeSvg } from '../../../public/icons/Sidebar/home.svg'
import { ReactComponent as SettingsSvg } from '../../../public/icons/Sidebar/settings.svg'
function Sidebar({ setPage, page }) {

  const handleSetPage = (curPage) => {
    setPage(curPage)
  }
  return (
    <div className="sidebar">
      <div className="app-logo"><AppIcon /></div>
      <div
        className={`button-group ${page === null ? 'active' : ''}`}
        onClick={() => { handleSetPage(null) }}>
        <HomeSvg />
      </div>
      <div
        className={`button-group ${page === 'library' ? 'active' : ''}`}
        onClick={() => { handleSetPage('library') }}>
        <BookSvg />
      </div>
      <div
        className={`button-group ${page === 'settings' ? 'active' : ''}`}>
        <SettingsSvg />
      </div>
    </div>
  );
}

export default Sidebar;
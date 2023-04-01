import { useState, useEffect } from 'react';
import './App.css';
import LoginPage from './view/pages/LoginPage/LoginPage';
import Sidebar from './view/components/Sidebar/Sidebar';
import Topbar from './view/components/Topbar/Topbar';
import HomePage from './view/pages/HomePage/HomePage';
import LibraryPage from './view/pages/LibraryPage/LibraryPage';
import SettingsPage from './view/pages/SettingsPage/SettingsPage';

function App() {
  const [kindleSynced, setKindleSynced] = useState(null);
  const [page, setPage] = useState(null);

  function handleProfile(kindleCon) {
    setKindleSynced(kindleCon);
  }
  return (
    <div className="App">
      <Sidebar setPage={setPage} page={page} />
      <div className="main-container">
        <Topbar />
        {kindleSynced
          ? page === 'library'
            ? <LibraryPage profile={kindleSynced} />
            : page === 'settings'
              ? <SettingsPage />
              : <HomePage />
          : <LoginPage setProfile={handleProfile} />
        }
      </div>
    </div>
  );
}

export default App;

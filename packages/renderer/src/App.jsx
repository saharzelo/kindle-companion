import { useState, useEffect } from 'react';
import './App.css'
import LoginPage from './view/pages/LoginPage/LoginPage'
import Sidebar from './view/components/Sidebar/Sidebar';
import Topbar from './view/components/Topbar/Topbar';
import HomePage from './view/pages/HomePage/HomePage';
import LibraryPage from './view/pages/LibraryPage/LibraryPage';

function App() {
  const [profile, setProfile] = useState(null);

  function handleProfile(profile) {
    setProfile(profile);
  }

  return (
    <div className="App">
      <Sidebar />
      <div className="main-container">
        <Topbar />
        {profile ? (
          <LibraryPage profile={profile} />
        ) : (
          <LoginPage setProfile={handleProfile} />
        )}
        {/* <LibraryPage profile={profile} /> */}
      </div>
    </div>
  );
}

export default App;
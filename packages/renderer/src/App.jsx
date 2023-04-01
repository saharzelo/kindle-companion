import { useState, useEffect } from 'react';
import LoginPage from './view/pages/LoginPage/LoginPage'
import HomePage from './view/pages/HomePage/HomePage';
import LibraryPage from './view/pages/LibraryPage/LibraryPage';

function App() {
  const [profile, setProfile] = useState(null);

  function handleProfile(profile) {
    setProfile(profile);
  }

  return (
    <div className="App">
      {profile ? (
        <LibraryPage profile={profile} />
      ) : (
        <LoginPage setProfile={handleProfile} />
      )}
      {/* <LibraryPage profile={profile} /> */}

    </div>
  );
}

export default App;
import { useState } from 'react';
import { ipcRenderer, loadUserData, saveUserData } from '#preload';
import LoginPage from './view/pages/LoginPage/LoginPage'
import HomePage from './view/pages/HomePage/HomePage';

function App() {

  // loadUserData().then((userData) => {
  //   console.log("User data loaded:", userData);
  // });

  // const onClick = () => {
  //   // Load the user's data when the page loads
  //   openFileExplorer()
  // }

  // const onClick2 = () => {
  //   const userData = { name: "Alice", age: 30 };
  //   saveUserData(userData);
  // }
  const [profile, setProfile] = useState(null);

  function handleProfile(profile) {
    setProfile(profile);
  }

  return (
    <div className="App">
      {profile ? (
        <HomePage profile={profile} />
      ) : (
        <LoginPage setProfile={handleProfile} />
      )}
    </div>
  );
}

export default App;
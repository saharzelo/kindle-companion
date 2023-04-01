import { useState, useEffect } from 'react';
import LoginPage from './view/pages/LoginPage/LoginPage'
import LibraryPage from './view/pages/LibraryPage/LibraryPage';

function App() {
  const [profile, setProfile] = useState(null);

  function handleProfile(profile) {
    setProfile(profile);
  }

  // useEffect(() => {
  //   const checkKindleStatus = async () => {
  //     try {
  //       // call function that chcks if files exists
  //       if (response.ok) {
  //         setIsLoggedIn(true);
  //       } else {
  //         throw new Error('Not logged in');
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   checkKindleStatus();
  // }, []);

  // const handleLogin = async () => {
  //   try {
  //     // call backend to see if files exists
  //     if (response.ok) {
  //       // set state as the profile
  //     } else {
  //       throw new Error('Invalid credentials');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
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
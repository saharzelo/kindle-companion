import { useState } from 'react';
import { ipcRenderer, openFile, loadUserData, saveUserData } from '#preload';
import LoginPage from './view/pages/LoginPage/LoginPage'


function App() {
  loadUserData().then((userData) => {
    console.log("User data loaded:", userData);
  });

  const onClick = () => {
    // Load the user's data when the page loads
    openFile()
  }

  const onClick2 = () => {
    const userData = { name: "Alice", age: 30 };
    saveUserData(userData);
  }

  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;

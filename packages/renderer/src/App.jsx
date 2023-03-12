import { useState } from 'react';
import { ipcRenderer, openFile, loadUserData, saveUserData } from '#preload';

function App() {
  loadUserData().then((userData) => {
    console.log("User data loaded:", userData);
  });

  const onClick = () => {
    // Load the user's data when the page loads
  }

  const onClick2 = () => {
    const userData = { name: "Alice", age: 30 };
    saveUserData(userData);
  }

  return (
    <div className="">
      <button
        onClick={() => { onClick() }}>
        CLICK ME
      </button>
      <button
        onClick={() => { onClick2() }}>
        CLICK ME2
      </button>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import './App.css'
import LoginPage from './view/pages/LoginPage/LoginPage'
import Sidebar from './view/components/Sidebar/Sidebar';
import Topbar from './view/components/Topbar/Topbar';
import HomePage from './view/pages/HomePage/HomePage';
import LibraryPage from './view/pages/LibraryPage/LibraryPage';

function App() {
  const [kindleCon, setkindleCon] = useState(null);
  const [page, setPage] = useState(null);

  function handleProfile(kindleCon) {
    setkindleCon(kindleCon);
  }

  return (
    <div className="App">
      <Sidebar setPage={setPage} page={page}/>
      <div className="main-container">
        <Topbar />
        {kindleCon ? (
          page == 'library' ? (<LibraryPage profile={kindleCon} />) : (<HomePage />)
        ) : (
          <LoginPage setProfile={handleProfile} />
        )}
        {/* <LibraryPage profile={profile} /> */}
      </div>
    </div>
  );
}

export default App;
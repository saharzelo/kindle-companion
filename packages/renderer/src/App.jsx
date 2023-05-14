import { useState, useEffect } from "react";
import Sidebar from "./view/components/Sidebar/Sidebar";
import Topbar from "./view/components/Topbar/Topbar";
import LoginPage from "./view/pages/LoginPage/LoginPage";
import HomePage from "./view/pages/HomePage/HomePage";
import WordsPage from "./view/pages/WordsPage/WordsPage";
import LibraryPage from "./view/pages/LibraryPage/LibraryPage";
import SettingsPage from "./view/pages/SettingsPage/SettingsPage";
import { getProfiles, loadProfile } from "#preload";
import "./App.css";

function App() {
    const [fetchedProfiles, setFetchedProfiles] = useState();
    const [currProfile, setCurrProfile] = useState();
    const [currPage, setCurrPage] = useState("homepage");

    useEffect(() => {
        async function fetchData() {
            const profiles = await getProfiles();
            setFetchedProfiles(profiles);
        }
        fetchData();
    }, [currProfile, fetchedProfiles]);

    function handleSync(profileName) {
        loadProfile(profileName)
        setCurrProfile(profileName)
    }

    return (
        <div className="App" key={currProfile}>
            <Sidebar setPage={setCurrPage} currPage={currPage} />
            <div className="main-container">
                <Topbar currProfile={currProfile} fetchedProfiles={fetchedProfiles} setProfile={handleSync} />

                {currProfile && currPage === "library" && <LibraryPage />}
                {currProfile && currPage === "settings" && <SettingsPage currProfile={currProfile} fetchedProfiles={fetchedProfiles} setProfile={handleSync}/>}
                {currProfile && currPage === "homepage" && <HomePage />}
                {currProfile && currPage === "words" && <WordsPage />}

                
                {!currProfile && <LoginPage fetchedProfiles={fetchedProfiles} setProfile={handleSync} /> }
            </div>
        </div>
    );
}

export default App;

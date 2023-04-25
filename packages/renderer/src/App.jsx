import { useState, useEffect } from "react";
import Sidebar from "./view/components/Sidebar/Sidebar";
import Topbar from "./view/components/Topbar/Topbar";
import LoginPage from "./view/pages/LoginPage/LoginPage";
import HomePage from "./view/pages/HomePage/HomePage";
import LibraryPage from "./view/pages/LibraryPage/LibraryPage";
import SettingsPage from "./view/pages/SettingsPage/SettingsPage";
import LoadingScreen from "./view/components/LoadingScreen/LoadingScreen";
import { getProfiles, loadProfile } from "#preload";
import "./App.css";

function App() {
    const [fetchedProfiles, setFetchedProfiles] = useState();
    const [userProfile, setUserProfile] = useState();
    const [currPage, setCurrPage] = useState("homepage");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const profiles = await getProfiles();
            setFetchedProfiles(profiles);
            setLoading(false);
        }
        fetchData();
    }, []);

    async function handleSync(profileName) {
        console.log('test')
        await loadProfile(profileName)
        setUserProfile(true)
    }

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <div className="App">
            <Sidebar setPage={setCurrPage} page={currPage} />
            <div className="main-container">
                <Topbar />
                {userProfile && currPage === "library" && (
                    <LibraryPage profile={userProfile} />
                )}
                {userProfile && currPage === "settings" && <SettingsPage />}
                {userProfile && currPage === "homepage" && <HomePage />}
                {!userProfile && (
                    <LoginPage
                        fetchedProfiles={fetchedProfiles}
                        setProfile={handleSync}
                    />
                )}
            </div>
        </div>
    );
}

export default App;

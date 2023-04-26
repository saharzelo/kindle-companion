import { useState } from "react";
import "./SettingsPage.css";
import { saveProfile } from "#preload"


function SettingsPage({ setProfile, fetchedProfiles }) {
    const [profileName, setProfileName] = useState("");

    const handleProfileSave = async (event) => {
        event.preventDefault();
        console.log(profileName); // log the profile name to the console
        await saveProfile(profileName);
    }

    return (
        <div className="settings-page">
            <div className="catalog-header">
                <h3>Your Settings: </h3>
            </div>

            <div className="settings-container">
                <h3>Profiles</h3>
                <h4>Save Profile:</h4>
                <div className="text-box">
                    <form>
                    <input type="text" placeholder="Name" value={profileName} onChange={(event) => setProfileName(event.target.value)}></input>{" "}
                        <button onClick={(event) => handleProfileSave(event)}> Save </button>
                    </form>
                </div>
                <h4>Delete Profile:</h4>
                <div className="profile-delete">
                    <select>
                        <option>Temp2</option>
                    </select>
                    <button>Delete</button>
                </div>

                <h3>System</h3>
                <h4>Enable Dark mode</h4>
            </div>
        </div>
    );
}

export default SettingsPage;

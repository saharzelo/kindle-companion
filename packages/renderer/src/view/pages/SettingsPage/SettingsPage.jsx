import { useState } from "react";
import "./SettingsPage.css";
import { saveProfile, deleteProfile } from "#preload"


function SettingsPage({ setProfile, fetchedProfiles, currProfile }) {
    const [saveProfileName, setSaveProfileName] = useState("");
    const [deleteProfileName, setDeleteProfileName] = useState()

    const handleProfileSave = async () => {
        if (saveProfileName) {
            await saveProfile(saveProfileName);
            await setProfile(saveProfileName)
        }
    }

    const handleProfileDelete = async () => {
        await deleteProfile(deleteProfileName)
        if (deleteProfileName === currProfile) {
            setProfile(null)
        }
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
                    <input type="text" placeholder="Name" value={saveProfileName} onChange={(event) => setSaveProfileName(event.target.value)} ></input>
                    <button onClick={handleProfileSave}> Save </button>
                </div>
                <h4>Delete Profile:</h4>
                <div className="profile-delete">
                    <select onChange={(event) => setDeleteProfileName(event.target.value)}>
                        <option>Select a Profile</option>
                        {fetchedProfiles.map((profile, index) => (<option key={index}>{profile}</option>))}
                    </select>
                    <button onClick={handleProfileDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default SettingsPage;

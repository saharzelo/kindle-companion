import "./SettingsPage.css";
import { saveProfile } from "#preload"


function SettingsPage({ }) {

    const handleProfileSave = (e) => {
        console.log(e.value)
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
                    <input type="text" placeholder="Name"></input>{" "}
                    <button onClick={(e) => handleProfileSave(e)}>Save</button>
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

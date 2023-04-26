import "./SettingsPage.css";
function SettingsPage({}) {
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
                    <button>Save</button>
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

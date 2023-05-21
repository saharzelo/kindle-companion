import Dropdown from "../Dropdown/Dropdown";
import stringUtils from "../../../controller/helpers/stringUtils";
import "./Topbar.css";

function Topbar({ fetchedProfiles, setProfile, currProfile }) {
    return (
        <div className="topbar">
            <div className="user-info">
                Welcome:{" "}
                <span>{currProfile && stringUtils.ucFirst(currProfile)}</span>
            </div>
            <div>
                <Dropdown
                    options={fetchedProfiles}
                    title={"Profiles"}
                    onClick={setProfile}
                />
            </div>
        </div>
    );
}

export default Topbar;

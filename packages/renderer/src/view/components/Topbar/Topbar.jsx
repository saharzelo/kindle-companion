import Dropdown from "../Dropdown/Dropdown";
import format from "../../../controller/helpers/format";
import "./Topbar.css";

function Topbar({ fetchedProfiles, setProfile, currProfile }) {
    return (
        <div className="topbar">
            <div className="user-info">
                Welcome:{" "}
                <span>{currProfile && format.ucFirst(currProfile)}</span>
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

import { useState } from 'react';
import './LoginPage.css'
import { openFile, loadUserData, saveUserData } from '#preload';
import { ReactComponent as LoginIcon } from '../../../public/icons/loginIcon.svg'
import { ReactComponent as FileIcon } from '../../../public/icons/fileIcon.svg'
import Dropdown from '../../components/Dropdown/Dropdown';
function LoginPage() {

    //   loadUserData().then((userData) => {
    //     console.log("User data loaded:", userData);
    //   });

    const onClick = () => {
        // Load the user's data when the page loads
        openFile()
    }

    const [isOpen, setIsOpen] = useState(false);
    // temp replace 
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="modal-bg">
            <div className="modalContent">
                <div className="header">
                    <LoginIcon />
                    <h1>Kindle Companion</h1>
                    <h6>Choose your kindle and find your companion!</h6>
                </div>
                <div className='modal-body'>
                    <div className="input-group">
                        <Dropdown isOpen={isOpen} toggleDropdown={toggleDropdown} />
                    </div>
                    <div className="under-text">
                        <span> or </span> <span onClick={() => onClick()} id="open-span">open</span> <span>Kindle</span>

                    </div>

                </div>
                <div className="footer">
                    <div className="footer-header">
                        <h2 className="razor" />
                    </div>
                    <div className="body">
                        <a href=''> Choose an Account</a>
                        <a id='create-account' href=''> Source Code </a>
                    </div>
                </div>
            </div>
        </div >


    );
}

export default LoginPage;

import { useState } from 'react';
import './LoginPage.css'
import { openFile, } from '#preload';
import { ReactComponent as LoginIcon } from '../../../public/icons/loginIcon.svg'
import { ReactComponent as FileIcon } from '../../../public/icons/fileIcon.svg'
import Dropdown from '../../components/Dropdown/Dropdown';
function LoginPage() {



    const onClick = () => {
        // Load the user's data when the page loads
        openFile()
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div className="modal-bg">
            <div className="modalContent">
                <div className='modal-body'>
                    <div className="login-form">
                        <div className="header">
                            <LoginIcon />
                            <h1>Kindle Companion</h1>
                            <h6>Choose your kindle and find your companion!</h6>
                        </div>

                        <div className="input-group">
                        <Dropdown isOpen={isOpen} toggleDropdown={toggleDropdown} />
                            <span> or open Kindle </span>
                        </div>
                    </div>

                </div>
                <div className="footer">
                    <div className="header">
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

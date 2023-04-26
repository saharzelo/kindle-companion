import { useState } from 'react';
import './LoginPage.css'
import { exportKindleContent } from '#preload';
import { ReactComponent as LoginIcon } from '../../public/icons/loginIcon.svg'
import Dropdown from '../../components/Dropdown/Dropdown';


function LoginPage({ fetchedProfiles, setProfile }) {


    // handle here, if to use file explorer or one of the profiles
    

    const handleFileExplorer = async () => {
        try {
            const result = await exportKindleContent();
            if (result==="success") {
                setProfile("guest");
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="login-modal-bg">
            <div className="login-modal-content">
                <div className="header">
                    <LoginIcon />
                    <h1>Kindle Companion</h1>
                    <h6>Choose your kindle and find your companion!</h6>
                </div>
                <div className='modal-body'>
                    <div className="input-group">
                        <Dropdown options={fetchedProfiles} title={"Profiles"} onClick={setProfile} />
                    </div>
                    <div className="under-text">
                        <span> or </span> <span onClick={() => handleFileExplorer()} id="open-span">open</span> <span>Kindle</span>

                    </div>

                </div>
                <div className="footer">
                    <div className="footer-header">
                        <h2 className="razor" />
                    </div>
                    <div className="body">
                        <a href=''> Device Status: OK</a>
                        <a id='create-account' href='https://github.com/saharzelo/kindle-companion'> Source Code </a>
                    </div>
                </div>
            </div>
        </div >


    );
}

export default LoginPage;

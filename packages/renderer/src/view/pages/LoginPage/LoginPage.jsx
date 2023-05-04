import { useState } from 'react';
import './LoginPage.css'
import { extractKindleContent } from '#preload';
import { ReactComponent as LoginIcon } from '../../public/icons/loginIcon.svg'
import Dropdown from '../../components/Dropdown/Dropdown';


function LoginPage({ fetchedProfiles, setProfile }) {

    const handleFileExplorer = async () => {
        try {
            const result = await extractKindleContent();
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
                    <h6>Choose your Kindle Device and Find Your Companion!</h6>
                </div>
                <div className='body'>
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
                        <span>Device Status: WIP</span>
                        <a id='create-account' href='https://github.com/saharzelo/kindle-companion'> Source Code </a>
                    </div>
                </div>
            </div>
        </div >


    );
}

export default LoginPage;

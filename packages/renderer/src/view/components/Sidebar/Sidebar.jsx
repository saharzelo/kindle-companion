import './Sidebar.css';
import { ReactComponent as AppIcon } from '../../public/icons/loginIcon.svg'

import { ReactComponent as BookSvg } from '../../public/icons/book.svg'
import { ReactComponent as HomeSvg } from '../../public/icons//home.svg'
import { ReactComponent as SettingsSvg } from '../../public/icons/settings.svg'
function Sidebar({ setPage, page }) {

    const handleSetPage = (curPage) => {
        setPage(curPage)
    }
    return (
        <div className="sidebar">
            <div className="app-logo"><AppIcon /></div>
            <div
                className={`button-group ${page === 'homepage' ? 'active' : ''}`}
                onClick={() => { handleSetPage('homepage') }}>
                <HomeSvg />
            </div>
            <div
                className={`button-group ${page === 'library' ? 'active' : ''}`}
                onClick={() => { handleSetPage('library') }}>
                <BookSvg />
            </div>
            <div
                className={`button-group ${page === 'settings' ? 'active' : ''}`}
                onClick={() => { handleSetPage('settings') }}>
                <SettingsSvg />
            </div>
        </div>
    );
}

export default Sidebar;
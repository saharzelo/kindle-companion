import './Sidebar.css';
import { ReactComponent as AppIcon } from '../../public/icons/loginIcon.svg'

import { ReactComponent as BookSvg } from '../../public/icons/book.svg'
import { ReactComponent as HomeSvg } from '../../public/icons//home.svg'
import { ReactComponent as SettingsSvg } from '../../public/icons/settings.svg'
function Sidebar({ setPage, currPage }) {

    const handleSetPage = (curPage) => {
        setPage(curPage)
    }
    return (
        <div className="sidebar">
            <div className="app-logo"><AppIcon /></div>
            <div
                className={`button-group ${currPage === 'homepage' ? 'active' : ''}`}
                onClick={() => { handleSetPage('homepage') }}>
                <HomeSvg />
            </div>
            <div
                className={`button-group ${currPage === 'library' ? 'active' : ''}`}
                onClick={() => { handleSetPage('library') }}>
                <BookSvg />
            </div>
            <div
                className={`button-group ${currPage === 'settings' ? 'active' : ''}`}
                onClick={() => { handleSetPage('settings') }}>
                <SettingsSvg />
            </div>
        </div>
    );
}

export default Sidebar;
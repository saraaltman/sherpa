import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import './header.css'

const Header = () => {
    const navigate = useNavigate();
    const handleProfileClick = () => navigate('/profile');


    return (
        <div className="header">
            <div className="logo">
                <a href="/">
                    Sherpa
                </a>
            </div>
            <div>
                <button className="avatarButton" onClick={handleProfileClick}>
                    <FontAwesomeIcon className="avatar" icon={faUser} />
                </button>
            </div>
        </div>
    );
}
export default Header;
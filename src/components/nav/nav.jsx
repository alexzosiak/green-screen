import { NavLink } from 'react-router';
import './nav.scss';
import github from './github.svg';

const Nav = () => {
    const getLinkClass = ({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`;
    
    return (
        <div className='nav'>
            <a className="nav__brand" href="/">
                <span className="nav__brand-dot"></span>
                <span>Green Screen</span>
            </a>
            <ul className='nav__list'>
                <li className='nav__list-item'>
                    <NavLink className={getLinkClass} to={'/'}>Home</NavLink>
                </li>
                <li className='nav__list-item'>
                    <NavLink className={getLinkClass} to={'/about'}>About</NavLink>
                </li>
                <li className='nav__list-item'>
                    <NavLink className={getLinkClass} to={'/setting'}>Setting</NavLink>
                </li>
            </ul>
            <a className="nav__github-link" href="https://github.com/alexzosiak/green-screen" aria-label="GitHub">
                <img src={github} alt="" className='nav__github'/>
            </a>
        </div>
    )
}


export default Nav;

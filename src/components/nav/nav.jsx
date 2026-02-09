import { NavLink } from 'react-router';
import './nav.scss';

const Nav = () => {
    
    return (
        <div className='nav'>
            <ul className='nav__list'>
                <li className='nav__list-item'><NavLink className='link' to={'/home'}>Home</NavLink></li>
                <li className='nav__list-item'><NavLink className='link' to={'/setting'}>Setting</NavLink></li>
                <li className='nav__list-item'><NavLink className='link' to={'/about'}>About</NavLink></li>
                <li className='nav__list-item'><a className='link' href="#">Contact</a></li>
            </ul>
        </div>
    )
}


export default Nav;
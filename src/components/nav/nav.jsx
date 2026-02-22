import { NavLink } from 'react-router';
import './nav.scss';
import github from './github.svg';

const Nav = () => {
    
    return (
        <div className='nav'>
            <a href="https://github.com/alexzosiak/green-screen"><img src={github} alt="github-link" className='nav__github'/></a>
            <ul className='nav__list'>
                <li className='nav__list-item'>
                    <NavLink className='link' style={({isActive}) => ({color: isActive ? 'black' : null})} to={'/'}>Home</NavLink>
                </li>
                <li className='nav__list-item'>
                    <NavLink className='link' style={({isActive}) => ({color: isActive ? 'black' : null})} to={'/about'}>About</NavLink>
                </li>
                <li className='nav__list-item'>
                    <NavLink className='link' style={({isActive}) => ({color: isActive ? 'black' : null})} to={'/setting'}>Setting</NavLink>
                </li>
                <li className='nav__list-item'>
                    <NavLink className='link' style={({isActive}) => ({color: isActive ? 'black' : null})} to={'/contact'}>Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}


export default Nav;
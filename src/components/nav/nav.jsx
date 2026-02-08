import './nav.scss';

const Nav = () => {
    
    return (
        <div className='nav'>
            <ul className='nav__list'>
                <li className='nav__list-item'><a className='link' href="#">Setting</a></li>
                <li className='nav__list-item'><a className='link' href="#">About</a></li>
                <li className='nav__list-item'><a className='link' href="#">Contact</a></li>
            </ul>
        </div>
    )
}


export default Nav;
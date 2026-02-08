import logo from './glasses.svg';
import Button from '../button/button';
import Nav from '../nav/nav';
import './hero.scss';

const Hero = ({ onToggleFullscreen }) => {
    return (
        <>
            <Nav />

            <div className="hero">
                <div className="hero__wrapper">
                    <h1 className="hero__title">Green Screen</h1>
                    <img className="hero__logo" src={logo} alt="logo" />
                </div>
                <h2 className="hero__subtitle">
                    create your first VFX effect in your film
                </h2>
                <Button
                    selector={'hero__button'}
                    text={'Try start'}
                    active={() => {
                        onToggleFullscreen();
                    }}
                ></Button>
            </div>
        </>
    );
};

export default Hero;

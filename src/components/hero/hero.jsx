import logo from './glasses.svg';
import './hero.scss';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__wrapper">
                <h1 className="hero__title">Green Screen</h1>
                <img className="hero__logo" src={logo} alt="logo" />
            </div>
            <h2 className="hero__subtitle">
                create your first VFX effect in your film
            </h2>

            <button className="hero__button">try play</button>
        </div>
    );
};

export default Hero;

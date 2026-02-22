import { usePlay } from '../hooks/global-state';
import Button from '../button/button';
import imac from './1.png';

import './hero.scss';

const Hero = () => {
    const { onToggleFullscreen } = usePlay();
   
    return (
        <section className="hero">
            <div className="hero__wrapper">
                <h1 className="hero__title">Green Screen</h1>
                <h2 className="hero__subtitle">create your first <b>VFX</b> effect in your film</h2>
                <Button
                    selector={'hero__button'}
                    text={'Try naw'}
                    active={() => {
                        onToggleFullscreen();
                    }}
                ></Button>
            </div>
            <img src={imac} alt="" className='hero__logo'/>
        </section>
        
    );
};

export default Hero;

import { usePlay } from '../hooks/global-state';
import Button from '../button/button';

import './hero.scss';



const Hero = () => {
    const { onToggleFullscreen } = usePlay();
   
    return (
        <section className="hero">
            <div className="hero__wrapper">
                <span className="hero__eyebrow">Virtual production toolkit</span>
                <h1 className="hero__title">Green Screen</h1>
                <h2 className="hero__subtitle">Create your first <b>VFX</b> effect and turn your screen into a clean chroma key stage.</h2>
                <Button
                    selector={'hero__button'}
                    text={'Start'}
                    active={() => {
                        onToggleFullscreen();
                    }}
                ></Button>
            </div>
            <div className="hero__monitor">
                <span className="hero__monitor-label">Stage monitor</span>
                <span className="hero__monitor-status">Ready for keying</span>
            </div>
        </section>
        
    );
};

export default Hero;

import { useEffect } from 'react';
import { usePlay } from '../hooks/play';

import Chromo from '../chromo/chromo';
import Conecter from '../conectr/conectr';

import './app.scss';

const App = () => {
    const { play, updatePlay } = usePlay();
 
    useEffect(() => {
        const check = () => {
            if (!document.fullscreenElement) {
                updatePlay(false);
            }
        };
        document.addEventListener('fullscreenchange', check);

        return () => {
            document.removeEventListener('fullscreenchange', check);
        };
    }, []);


    return (
        <div className={play ? 'app' : 'app-ctatic'}>
            {play ? <Chromo /> : <Conecter />}
        </div>
    );
};

export default App;

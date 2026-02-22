import { useEffect } from 'react';
import { usePlay } from '../hooks/global-state';

import Chromo from '../chromo/chromo';
import AppRouter from '../app-router/app-router';

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
            {play ? <Chromo /> : <AppRouter />}
        </div>
    );
};

export default App;

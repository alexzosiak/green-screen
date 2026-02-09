import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Button from '../button/button';
import ModeController from '../mode-controller/mode-controller';
import Hero from '../hero/hero';
import Chromo from '../chromo/chromo';
import Conecter from '../conectr/conectr';
import Hronomer from '../hronomer/hronomer';
import Nav from '../nav/nav';

import './app.scss';

const App = () => {
    const [play, setPlay] = useState(false);
    const [timeCode, setTimeCode] = useState(null);

    console.log(`App - ${timeCode}`)

    useEffect(() => {
        const check = () => {
            if (!document.fullscreenElement) {
                setPlay(false);
            }
        };
        document.addEventListener('fullscreenchange', check);

        return () => {
            document.removeEventListener('fullscreenchange', check);
        };
    }, []);

    const onToggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement
                .requestFullscreen()
                .then(() => setPlay(true));
        } else {
            document.exitFullscreen();
        }
    };

    return (
            <div className={play ? 'app' : 'app-ctatic'}>
            {play ? <Chromo setPlay={setPlay} timeCode={timeCode}/> : <Conecter onToggleFullscreen={onToggleFullscreen} setTimeCode={setTimeCode}/>}
            </div>
    );
};

export default App;

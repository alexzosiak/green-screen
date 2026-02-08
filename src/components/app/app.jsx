import { useState } from "react";

import Marker from "../marker/marker";
import Button from "../button/button";
import ModeController from '../mode-controller/mode-controller';
import Hero from "../hero/hero";

import './app.scss';

const App = () => {
    const [play, setPlay] = useState(false);
    const body = document.querySelector('body');


        // const onPlay = () => {
        //     setPlay(() => true)
        // }


    if (play) {
        console.log(`??? ${play}`)
        body.style.backgroundColor = 'green';
    }

 

    return (
        
            <div className="app">
                <Hero/>
                   
            </div>
         
     
    )
}

export default App;



import { useState } from "react";

import Plus from "../plus/plus";
import Button from "../button/button";
import ModeController from '../mode-controller/mode-controller';
import Logo from "../logo/logo";

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
                <ModeController />
                   
            </div>
         
     
    )
}

export default App;



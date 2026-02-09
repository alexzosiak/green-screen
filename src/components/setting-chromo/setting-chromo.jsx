import { useEffect, useState } from "react";

const SettingChromo = ({setTimeCode}) => {
    const [timecode, setTimecode] = useState(1);
    
    useEffect(() => {
        if (timecode === 1) {
            setTimeCode(true);
        } else {
            setTimeCode(false);
        }
    }, [timecode]);

    return (
        <div>
            <h1>{`this - ${timecode}`}</h1>

            
               

            <div>
                <label htmlFor="time-code">Time code</label>
                <span>Not</span>
                <input type="range" id="time-code" min='0' max='1' volue='1' onChange={(e) => setTimecode(e.target.value)}/>
                <span>Yes</span>
            </div>

     

      

            
         
        </div>
    )
}

export default SettingChromo;
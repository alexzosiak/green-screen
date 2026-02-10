import { useState } from "react";
import './setting-chromo.scss';

const SettingChromo = ({asa, asa2, asa3, hronomer, marker, screen}) => {
    const [timecode, setTimecode] = useState(hronomer);
    const [markerSetting, setMarkerSetting] = useState(marker);
    const [screenSetting, setScreenSetting] = useState(screen);

    return (
        <div className="setting">
            <div className="setting__block">
                <label htmlFor="time-code">Time code</label>
                <span>Not</span>
                <input type="range" id="time-code" min={0} max={1} value={timecode} onChange={(e) => {
                    setTimecode(e.target.value);
                    asa(e.target.value);
                    }}/>
                <span>Yes</span>
            </div>

             <div className="setting__block">
                <label htmlFor="marker-code">Marker</label>
                <span>Not</span>
                <input type="range" id="marker-code" min={0} max={1} value={markerSetting} onChange={(e) => {
                    setMarkerSetting(e.target.value);
                    asa2(e.target.value);
                    }}/>
                <span>Yes</span>
            </div>

             <div className="setting__block">
                <label htmlFor="screen-code">Screen</label>
                <span>blue</span>
                <input type="range" id="screen-code" min={0} max={1} value={screenSetting} onChange={(e) => {
                    setScreenSetting(e.target.value);
                    asa3(e.target.value);
                    }}/>
                <span>green</span>
            </div>
         
        </div>
    )
}

export default SettingChromo;
import { useState } from "react";
import { useScreen, useMarker, useHronomer } from '../hooks/play';
import './setting-chromo.scss';

const SettingChromo = () => {
    const { marker, updateMarker } = useMarker();
    const { hronomer, updateHronomer } = useHronomer();
    const { screen, updateScreen} = useScreen();


    const [timecode, setTimecode] = useState(hronomer);
    const [markerSetting, setMarkerSetting] = useState(marker);
    const [screenSetting, setScreenSetting] = useState(screen);


    console.log(`Error color Setting lvl - SCREEN: ${screen} / SCREENSETTING ${screenSetting}`)

    function active(value) {     
        const activiti = Number(value);
        return activiti ? 'setting__wrapper' : 'setting__wrapper unActive';
    }

    return (
        <>
        <h1 className="setting__h1">Here you can try to use your setting</h1>
        <div className="setting">

            <div className="setting__block">
                <label className="setting__title" htmlFor="time-code">Time code</label>
                <div className={active(timecode)}>
                    <span className="setting__span">Not</span>
                    <input className="setting__range" type="range" id="time-code" min={0} max={1} value={timecode} onChange={(e) => {
                        setTimecode(e.target.value);
                        updateHronomer(e.target.value);
                        }}/>
                    <span className="setting__span">Yes</span>
                </div>
            </div>

             <div className="setting__block">
                    <label className="setting__title" htmlFor="marker-code">Marker</label>
                    <div className={active(markerSetting)}>
                    <span className="setting__span">Not</span>
                    <input className="setting__range" type="range" id="marker-code" min={0} max={1} value={markerSetting} onChange={(e) => {
                        setMarkerSetting(e.target.value);
                        updateMarker(e.target.value);
                        }}/>
                    <span className="setting__span">Yes</span>
                </div>
            </div>

             <div className="setting__block">
                    <label className="setting__title" htmlFor="screen-code">Screen</label>
                    <div className={active(screenSetting)}>
                    <span className="setting__span">blue</span>
                    <input className="setting__range" type="range" id="screen-code" min={0} max={1} value={screenSetting} onChange={(e) => {
                        setScreenSetting(e.target.value);
                        updateScreen(e.target.value);
                        }}/>
                    <span className="setting__span">green</span>
                </div>
            </div>
         
        </div>
        </>
    )
}

export default SettingChromo;
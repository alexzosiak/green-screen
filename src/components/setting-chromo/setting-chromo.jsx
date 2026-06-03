import { useScreen, useMarker, useHronomer } from '../hooks/global-state';
import './setting-chromo.scss';

const SettingChromo = () => {
    const { marker, updateMarker } = useMarker();
    const { hronomer, updateHronomer } = useHronomer();
    const { screen, updateScreen} = useScreen();

    function active(value) {     
        const activiti = Number(value);
        return activiti ? 'setting__wrapper' : 'setting__wrapper unActive';
    }

    console.log('line 35', hronomer);
    return (
        <>
        <h1 className="setting__h1">Here you can try to use your setting</h1>
        <div className="setting">

             <div className="setting__block">
                    <label className="setting__title" htmlFor="marker-code">Marker</label>
                    <div className={active(marker)}>
                    <span className="setting__span">Not</span>
                    <input className="setting__range" type="range" id="marker-code" min={0} max={1} value={marker} onChange={(e) => {
                        updateMarker(Number(e.target.value));
                        }}/>
                    <span className="setting__span">Yes</span>
                </div>
            </div>

             <div className="setting__block">
                    <label className="setting__title" htmlFor="screen-code">Screen</label>
                    <div className={active(true)}>
                    <span className="setting__span">blue</span>
                    <input className="setting__range" type="range" id="screen-code" min={0} max={1} value={screen} onChange={(e) => {
                        updateScreen(Number(e.target.value));
                        }}/>
                    <span className="setting__span">green</span>
                </div>

            </div>
            <div className="setting__block">
                <label className="setting__title" htmlFor="time-code">Time code</label>
                <div className={active(hronomer)}>
                    <span className="setting__span">Not</span>
                    <input className="setting__range" type="range" id="time-code" min={0} max={1} value={hronomer} onChange={(e) => {
                        updateHronomer(Number(e.target.value));
                        }}/>
                    <span className="setting__span">Yes</span>
                </div>
            </div>

            {hronomer ? <div className="setting__block">
                <label className="setting__title" htmlFor="hronomer-code">Time code reset</label>
                <button className="setting__button" onClick={() => {
                    localStorage.removeItem('chronometer_start_time');
                }}>OK</button>
            </div> : null}  
         
        </div>
        </>
    )
}

export default SettingChromo;
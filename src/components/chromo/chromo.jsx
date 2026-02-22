import { useScreen, useHronomer, useMarker } from '../hooks/global-state';
import Marker from '../marker/marker';
import Hronomer from '../hronomer/hronomer';

import './chromo.scss';


const Chromo = () => {
    const { screen } = useScreen();
    const { hronomer } = useHronomer();
    const { marker } = useMarker();

    let showScreen = 'chromo ';
    showScreen += +screen ? 'green' : 'blue';
    const showHronomer = +hronomer ? <Hronomer/> : null;
    const showMarkers = +marker ? <Marker /> : null;

    return (
        <div className={showScreen}>
            {showMarkers}
            {showHronomer}
        </div>
    );
};

export default Chromo;

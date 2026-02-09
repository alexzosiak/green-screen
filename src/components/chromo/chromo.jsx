import './chromo.scss';
import Marker from '../marker/marker';
import Hronomer from '../hronomer/hronomer';

const Chromo = ({timeCode}) => {

    console.log(`this is page Chromo : ${timeCode}`)
    
    return (
        <div className="chromo">
            <Marker />
            {timeCode ? <Hronomer /> : null}
        </div>
    );
};

export default Chromo;

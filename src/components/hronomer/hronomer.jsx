import { useEffect, useState } from 'react';
import './hronomer.scss';

const Hronomer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const start = Date.now(); 
        const interval = setInterval(() => {
            setTime(Date.now() - start);
        }, 10); 

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time) => {
        const totalSeconds = Math.floor(time / 1000);
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        const milli = Math.floor((time % 1000) / 10);
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}.${milli.toString().padStart(2, '0')}`;
    };

    return <div className="hronomer">{formatTime(time)}</div>;
};

export default Hronomer;

import { useEffect, useState } from 'react';
import './hronomer.scss';

const Hronomer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const STORAGE_KEY = 'chronometer_start_time';
        
        let startTime = localStorage.getItem(STORAGE_KEY);
        if (!startTime) {
            startTime = Date.now().toString();
            localStorage.setItem(STORAGE_KEY, startTime);
        } else {
            startTime = parseInt(startTime);
        }

        const interval = setInterval(() => {
            const elapsed = Date.now() - parseInt(localStorage.getItem(STORAGE_KEY));
            setTime(elapsed);
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

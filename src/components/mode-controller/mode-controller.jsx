import { useState } from 'react';

const ModeController = () => {
    const [m, setM] = useState(1);
    const [text, setText] = useState(null) 

    const add = (m) => {
        if (m === 2) {
            setText('test 2')
        } else {
            setText()
        }
    }


    return (
        <div>
            <label htmlFor="ims">{text}</label>
            <input name='ims' type="range" min={1} max={3} step={1} value={m} onChange={(e) => {
                setM(+e.target.value);
                add(+e.target.value);
                }}></input>
        </div>
    );
};

export default ModeController;

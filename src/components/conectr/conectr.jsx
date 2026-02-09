import { BrowserRouter, Route, Routes } from 'react-router';
import TestPage from '../pages/TestPage';
import AboutPage from '../pages/AboutPage';
import SettingPage from '../pages/SettingPage';

import Nav from "../nav/nav";

const Conecter = ({onToggleFullscreen, setTimeCode}) => {
    

    return (
        <>  
            <BrowserRouter>
                <Nav/>
                    <Routes>
                        <Route path='/home' element={<TestPage onToggleFullscreen={onToggleFullscreen} />}></Route>
                        <Route path='/about' element={<AboutPage/>}></Route>
                        <Route path='/setting' element={<SettingPage setTimeCode={setTimeCode}/>}></Route>
                    </Routes>
            </BrowserRouter>
        </>
    )
}

export default Conecter;
import { BrowserRouter, Route, Routes } from 'react-router';
import TestPage from '../pages/TestPage';
import AboutPage from '../pages/AboutPage';
import SettingPage from '../pages/SettingPage';

import Nav from "../nav/nav";

const Conecter = ({onToggleFullscreen, asa, asa2, asa3, hronomer, marker, screen}) => {
    return (
        <>  
            <BrowserRouter>
                <Nav/>
                    <Routes>
                        <Route path='/' element={<TestPage onToggleFullscreen={onToggleFullscreen} />}></Route>
                        <Route path='/about' element={<AboutPage/>}></Route>
                        <Route path='/setting' element={<SettingPage asa={asa} asa2={asa2} asa3={asa3} hronomer={hronomer} marker={marker} screen={screen}/>}></Route>
                    </Routes>
            </BrowserRouter>
        </>
    )
}

export default Conecter;
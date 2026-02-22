import { BrowserRouter, Route, Routes } from 'react-router';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import SettingPage from '../pages/SettingPage';

import Nav from "../nav/nav";

const AppRouter = () => {

    return (
        <>  
            <BrowserRouter>
                <Nav/>
                    <Routes>
                        <Route path='/' element={<MainPage />}></Route>
                        <Route path='/about' element={<AboutPage />}></Route>
                        <Route path='/setting' element={<SettingPage />}></Route>
                    </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;
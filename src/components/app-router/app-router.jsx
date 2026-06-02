import { BrowserRouter, Route, Routes } from 'react-router';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import SettingPage from '../pages/SettingPage';

import Nav from "../nav/nav";
import './app-router.scss';

const AppRouter = () => {

    return (
        <BrowserRouter>
            <div className="site-shell">
                <Nav/>
                <Routes>
                    <Route path='/' element={<MainPage />}></Route>
                    <Route path='/about' element={<AboutPage />}></Route>
                    <Route path='/setting' element={<SettingPage />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;

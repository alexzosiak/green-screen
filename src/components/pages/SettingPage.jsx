import { usePlay } from '../hooks/global-state';
import SettingChromo from "../setting-chromo/setting-chromo";
import Button from "../button/button";
import './SettingPage.scss';

const SettingPage = () => {
    const { onToggleFullscreen} = usePlay();

    return (
        <main className="setting-page">
            <SettingChromo />
            <Button
                selector={'setting-page__button'}
                text={'Launch screen'}
                active={() => {
                    onToggleFullscreen();
                }}
            ></Button>
        </main>
    )
    
}

export default SettingPage;

import { usePlay } from '../hooks/play';
import SettingChromo from "../setting-chromo/setting-chromo";
import Button from "../button/button";

const SettingPage = () => {
    const { onToggleFullscreen} = usePlay();

    return (
        <div>
            <SettingChromo />
               <Button
                selector={'hero__button'}
                text={'Try start'}
                active={() => {
                    onToggleFullscreen();
                }}
            ></Button>
        </div>
    )
    
}

export default SettingPage;
import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Button, Footer, Spacer } from '../components/index';
import PlanetType from '../models/PlanetType';
import {
    usePlanetNameStore,
    usePlanetTypeStore,
    useSliderStore,
} from '../stores/store';
import * as Strings from '../constant/strings';
import * as Config from '../constant/config';
import '../styles/Finish.css';

const Finish = () => {
    const navigate = useNavigate();
    const setSliderValueByPlanetType = useSliderStore(
        (state) => state.setSliderValueByPlanetType
    );
    const setPlanetType = usePlanetTypeStore((state) => state.setPlanetType);
    const setPlanetName = usePlanetNameStore((state) => state.setPlanetName);

    const toHome = () => {
        // 初期化をして、画面遷移する
        setSliderValueByPlanetType(PlanetType.EARTH);
        setPlanetType(PlanetType.EARTH);
        setPlanetName('');
        navigate(Strings.HOME_URL);
    };

    return (
        <motion.div
            className={'finish'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: Config.SCREEN_TRANSITION_DURATION_S }}
        >
            <p className={'finish_label'}>{Strings.FINISH_FIRST_LABEL}</p>
            <p className={'finish_label'}>{Strings.FINISH_SECOND_LABEL}</p>
            <Spacer height={44} />
            <Button
                className={'primary__m'}
                name={Strings.TO_HOME_BUTTON}
                disabled={false}
                disabledName={Strings.TO_HOME_BUTTON}
                onClick={() => toHome()}
            />
            <Footer />
        </motion.div>
    );
};

export default Finish;

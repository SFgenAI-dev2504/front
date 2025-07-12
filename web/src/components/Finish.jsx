import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Footer, Spacer } from '../components/index';
import '../styles/Finish.css';
import * as Strings from '../constant/strings';
import {
    usePlanetNameStore,
    usePlanetTypeStore,
    useSliderStore,
} from '../stores/store';
import PlanetType from '../models/PlanetType';

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
        <section className={'finish'}>
            <p className={'finish_label'}>{Strings.FINISH_FIRST_LABEL}</p>
            <p className={'finish_label'}>{Strings.FINISH_SECOND_LABEL}</p>
            <Spacer height={24} />
            <Button
                className={'button--primary'}
                name={Strings.TO_HOME}
                width={288}
                disabled={false}
                disabledName={Strings.TO_HOME}
                onClick={() => toHome()}
            />
            <Footer />
        </section>
    );
};

export default Finish;

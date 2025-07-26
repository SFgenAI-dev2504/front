import React from 'react';
import { Button, NoImage, Parameters, Spacer } from '../components/index';
import '../styles/Generator.css';
import * as Strings from '../constant/strings';
import { useNavigate } from 'react-router-dom';
import { usePlanetNameStore } from '../stores/store';
import { warn } from '../core/notify/notify';
import { validateMinAndMax } from '../core/validator/lengthValidator';
import { validate } from '../core/validator/characterTypeValidator';
import BackgroundImage from '../assets/images/background_dark.png';
import ParamBackgroundImage from '../assets/images/param_background.png';

const Generator = () => {
    const navigate = useNavigate();
    const planetName = usePlanetNameStore((state) => state.planetName);

    const handleClick = () => {
        // 長さチェック
        if (!validateMinAndMax(planetName, 1, 6)) {
            warn(Strings.PLANET_NAME_LENGTH_VALIDATE_WARN_MESSAGE);
            return;
        }

        // 文字種チェック
        if (!validate(planetName)) {
            warn(Strings.PLANET_NAME_TARGET_CHARS_VALIDATE_WARN_MESSAGE);
            return;
        }

        navigate(Strings.RESULT_URL);
    };

    return (
        <section className={'generator'}>
            <img className={'generator_bk'} src={BackgroundImage} alt={''} />
            <div className={'left'}>
                <NoImage />
            </div>
            <div className={'right'}>
                <img src={ParamBackgroundImage} alt={''} />
                <Parameters disabled={false} />
                <Spacer height={24} />
                <Button
                    className={'secondary__pop__ll'}
                    name={Strings.GENERATE_BUTTON}
                    disabled={false}
                    disabledName={Strings.GENERATE_BUTTON}
                    onClick={() => handleClick()}
                />
            </div>
        </section>
    );
};

export default Generator;

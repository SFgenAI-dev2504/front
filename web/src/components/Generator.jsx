import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    FadeMotion,
    FadeSlideMotion,
    NoImage,
    Parameters,
    Spacer,
} from '../components/index';
import FadeState from '../models/FadeState';
import { useFadeStateStore, usePlanetNameStore } from '../stores/store';
import { warn } from '../core/notify/notify';
import { validateMinAndMax } from '../core/validator/lengthValidator';
import { validate } from '../core/validator/characterTypeValidator';
import * as Strings from '../constant/strings';
import * as Config from '../constant/config';
import BackgroundImage from '../assets/images/background_dark.png';
import '../styles/Generator.css';

const Generator = () => {
    const navigate = useNavigate();
    const planetName = usePlanetNameStore((state) => state.planetName);
    const setFadeState = useFadeStateStore((state) => state.setValue);

    const generate = () => {
        // 長さチェック
        if (
            !validateMinAndMax(planetName, Config.MIN_LENGTH, Config.MAX_LENGTH)
        ) {
            warn(Strings.PLANET_NAME_LENGTH_VALIDATE_WARN_MESSAGE);
            return;
        }

        // 文字種チェック
        if (!validate(planetName)) {
            warn(Strings.PLANET_NAME_TARGET_CHARS_VALIDATE_WARN_MESSAGE);
            return;
        }
        setFadeState(FadeState.FADE_OUT);

        setTimeout(() => {
            navigate(Strings.RESULT_URL);
        }, Config.DURATION_MS);
    };

    return (
        <section className={'generator'}>
            <img className={'generator_bk'} src={BackgroundImage} alt={''} />
            <div className={'left'}>
                <FadeMotion isNormalOrder={true}>
                    <NoImage />
                </FadeMotion>
            </div>
            <div className={'right'}>
                <FadeSlideMotion
                    isNormalOrder={true}
                    fadeInY={Config.TRANSFORM_SLIDER_FADE_IN_Y}
                    fadeOutY={Config.TRANSFORM_SLIDER_FADE_OUT_Y}
                >
                    <Parameters />
                </FadeSlideMotion>
                <Spacer height={24} />
                <FadeMotion isNormalOrder={true}>
                    <Button
                        className={'secondary__pop__ll'}
                        name={Strings.GENERATE_BUTTON}
                        disabled={false}
                        disabledName={Strings.GENERATE_BUTTON}
                        onClick={() => generate()}
                    />
                </FadeMotion>
            </div>
        </section>
    );
};

export default Generator;

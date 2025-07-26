import React from 'react';
import { Button, NoImage, Parameters, Spacer } from '../components/index';
import '../styles/Generator.css';
import * as Strings from '../constant/strings';
import * as Config from '../constant/config';
import { useNavigate } from 'react-router-dom';
import { useGenerateFadeStore, usePlanetNameStore } from '../stores/store';
import { warn } from '../core/notify/notify';
import { validateMinAndMax } from '../core/validator/lengthValidator';
import { validate } from '../core/validator/characterTypeValidator';
import BackgroundImage from '../assets/images/background_dark.png';
import ParamBackgroundImage from '../assets/images/param_background.png';
import FadeState from '../models/FadeState';

const Generator = () => {
    const navigate = useNavigate();
    const planetName = usePlanetNameStore((state) => state.planetName);
    const fadeState = useGenerateFadeStore((state) => state.value);
    const setFadeState = useGenerateFadeStore((state) => state.setValue);

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
        setFadeState(FadeState.FADE_OUT);

        setTimeout(() => {
            navigate(Strings.RESULT_URL);
        }, Config.DURATION);
    };

    const createClassName = (base, fadeIn, fadeOut) => {
        if (base === null) {
            if (fadeState === FadeState.NO_FADE) {
                return '';
            } else if (fadeState === FadeState.FADE_IN) {
                return fadeIn;
            } else if (fadeState === FadeState.FADE_OUT) {
                return fadeOut;
            }
        } else {
            if (fadeState === FadeState.NO_FADE) {
                return base;
            } else if (fadeState === FadeState.FADE_IN) {
                return `${base} ${fadeIn}`;
            } else if (fadeState === FadeState.FADE_OUT) {
                return `${base} ${fadeOut}`;
            }
        }
    };

    return (
        <section className={'generator'}>
            <img className={'generator_bk'} src={BackgroundImage} alt={''} />
            <div className={createClassName('left', 'fade-in', 'fade-out')}>
                <NoImage />
            </div>
            <div className={'right'}>
                <div
                    className={createClassName(
                        null,
                        'fade-in-up',
                        'fade-out-down'
                    )}
                >
                    <img src={ParamBackgroundImage} alt={''} />
                    <Parameters disabled={false} />
                </div>
                <Spacer height={24} />
                <Button
                    className={createClassName(
                        'secondary__pop__ll',
                        'fade-in',
                        'fade-out'
                    )}
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

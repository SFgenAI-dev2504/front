import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Footer, NoImage, Explanation } from '../components/index';
import '../styles/Result.css';
import * as Config from '../constant/config';
import * as Dimens from '../constant/dimens';
import { MoonLoader } from 'react-spinners';
import axios from 'axios';
import * as Strings from '../constant/strings';
import { error, success, warn } from '../core/notify/notify';
import {
    useGenerateFadeStore,
    usePlanetNameStore,
    usePlanetTypeStore,
    useSliderStore,
} from '../stores/store';
import PlanetType from '../models/PlanetType';
import BackgroundImage from '../assets/images/background_dark.png';
import FadeState from '../models/FadeState';

const Result = () => {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const sliderValue = useSliderStore((state) => state.sliders);
    const planetName = usePlanetNameStore((state) => state.planetName);
    const setSliderValueByPlanetType = useSliderStore(
        (state) => state.setSliderValueByPlanetType
    );
    const setPlanetType = usePlanetTypeStore((state) => state.setPlanetType);
    const setPlanetName = usePlanetNameStore((state) => state.setPlanetName);
    const fadeState = useGenerateFadeStore((state) => state.value);
    const setFadeState = useGenerateFadeStore((state) => state.setValue);

    useEffect(() => {
        const generate = async () => {
            const payload = {
                ...sliderValue,
                planetName: `${planetName}${Strings.PLANET_NAME_KANA_SUFFIX}`,
            };
            axios
                .post(`${Config.GENERATE_API_URL}`, payload, {
                    headers: Config.COMMON_HEADER,
                })
                .then((response) => {
                    const body = response.data;
                    console.log(body);
                    setResponse(body);
                    setIsLoading(false);

                    return response.data;
                })
                .catch((e) => {
                    const body = e.response.data;
                    console.log(body);
                    if (body && body.code && body.message) {
                        error(`${body.code}: ${body.message}`);
                    } else {
                        error(Strings.FAILED_GENERATOR_MESSAGE);
                    }

                    setResponse(null);
                    setIsLoading(false);
                    return null;
                });
        };

        generate();
    }, []);

    const decide = () => {
        if (!response.imageId) {
            error(Strings.NO_CREATE_IMAGE_MESSAGE);
            return;
        }

        setFadeState(FadeState.NO_FADE);
        const payload = {
            imageId: response.imageId,
        };
        axios
            .post(`${Config.DECIDE_API_URL}`, payload, {
                headers: Config.COMMON_HEADER,
            })
            .then((response) => {
                const body = response.data;
                console.log(body);
                success(
                    `${Strings.SUCCESS_DECIDE_MESSAGE}(画像ID: ${response.imageId})`
                );
                navigate(Strings.FINISH_URL);
            })
            .catch((e) => {
                const body = e.response.data;
                console.log(body);
                if (body && body.code && body.message) {
                    const message = response.imageId
                        ? `(画像ID: ${response.imageId})`
                        : '';
                    error(`${body.code}: ${body.message}${message}`);
                } else {
                    error(Strings.FAILED_DECIDE_MESSAGE);
                }
            });
    };

    const remake = () => {
        // 初期化をして、画面遷移する
        setSliderValueByPlanetType(PlanetType.EARTH);
        setPlanetType(PlanetType.EARTH);
        setFadeState(FadeState.FADE_IN);

        setTimeout(() => {
            navigate(Strings.GENERATOR_URL);
            setPlanetName('');
        }, Config.DURATION);
    };

    const toAddGallery = () => {
        if (!response.imageId) {
            error(Strings.NO_CREATE_IMAGE_MESSAGE);
            return;
        }

        warn(Strings.COMING_SOON);
    };

    const createClassName = (base, fadeIn, fadeOut) => {
        if (base === null) {
            if (fadeState === FadeState.NO_FADE) {
                return ``;
            } else if (fadeState === FadeState.FADE_IN) {
                return fadeOut;
            } else if (fadeState === FadeState.FADE_OUT) {
                return fadeIn;
            }
        } else {
            if (fadeState === FadeState.NO_FADE) {
                return `${base}`;
            } else if (fadeState === FadeState.FADE_IN) {
                return `${base} ${fadeOut}`;
            } else if (fadeState === FadeState.FADE_OUT) {
                return `${base} ${fadeIn}`;
            }
        }
    };

    return (
        <section className={'result'}>
            <img className={'result_bk'} src={BackgroundImage} alt={''} />
            {isLoading && (
                <div className={'loading'}>
                    <MoonLoader color={Dimens.LOADER_COLOR} />
                </div>
            )}
            {!isLoading && (
                <div className={'result__container'}>
                    <div
                        className={createClassName(
                            'left',
                            'fade-in',
                            'fade-out'
                        )}
                    >
                        {response ? (
                            <img
                                className={'image'}
                                src={response.imageUrl}
                                alt={''}
                            />
                        ) : (
                            <NoImage />
                        )}
                    </div>
                    <div className={'right'}>
                        <div
                            className={createClassName(
                                null,
                                'fade-in-down',
                                'fade-out-up'
                            )}
                        >
                            {response ? (
                                <Explanation
                                    planetName={planetName}
                                    detail={response.explanation}
                                    rating={response.rate}
                                />
                            ) : (
                                <Explanation
                                    planetName={planetName}
                                    detail={null}
                                    rating={-1}
                                />
                            )}
                        </div>

                        <div
                            className={createClassName(
                                'first__button',
                                'fade-in',
                                'fade-out'
                            )}
                        >
                            <Button
                                className={'primary__pop__l'}
                                name={Strings.DECISION_BUTTON}
                                width={288}
                                widthHover={288}
                                disabled={
                                    response === null ||
                                    response.imageId === null
                                }
                                disabledName={Strings.DECISION_BUTTON}
                                onClick={() => decide()}
                            />
                        </div>
                        <div
                            className={createClassName(
                                'second__button',
                                'fade-in',
                                'fade-out'
                            )}
                        >
                            <Button
                                className={'transparent__pop__s'}
                                name={Strings.REMAKE_BUTTON}
                                width={288}
                                widthHover={288}
                                disabled={false}
                                disabledName={Strings.REMAKE_BUTTON}
                                onClick={() => remake()}
                            />
                        </div>
                        <div
                            className={createClassName(
                                'third__button',
                                'fade-in',
                                'fade-out'
                            )}
                        >
                            <Button
                                className={'transparent__pop__m'}
                                name={Strings.ADD_GALLERY_BUTTON}
                                width={288}
                                widthHover={288}
                                disabled={
                                    response === null ||
                                    response.imageId === null
                                }
                                disabledName={Strings.ADD_GALLERY_BUTTON}
                                onClick={() => toAddGallery()}
                            />
                        </div>
                    </div>
                    <p className={'result__container'}></p>
                    <Footer />
                </div>
            )}
        </section>
    );
};

export default Result;

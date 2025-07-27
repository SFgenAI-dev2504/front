import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import axios from 'axios';
import {
    Button,
    Footer,
    NoImage,
    Explanation,
    FadeMotion,
    FadeSlideMotion,
} from '../components/index';
import FadeState from '../models/FadeState';
import PlanetType from '../models/PlanetType';
import {
    useFadeStateStore,
    usePlanetNameStore,
    usePlanetTypeStore,
    useSliderStore,
} from '../stores/store';
import { error, success, warn } from '../core/notify/notify';
import * as Strings from '../constant/strings';
import * as Config from '../constant/config';
import * as Dimens from '../constant/dimens';
import BackgroundImage from '../assets/images/background_dark.png';
import '../styles/Result.css';

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
    const setFadeState = useFadeStateStore((state) => state.setValue);

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
                    // タイムアウトの場合
                    if (e.code === 'ECONNABORTED') {
                        error(Strings.TIMEOUT_MESSAGE);
                    } else {
                        const body = e.response.data;
                        console.log(body);
                        if (body && body.code && body.message) {
                            error(`${body.code}: ${body.message}`);
                        } else {
                            error(Strings.FAILED_GENERATOR_MESSAGE);
                        }
                    }

                    setResponse(null);
                    setIsLoading(false);
                    return null;
                });
        };

        generate();
    }, []);

    const decide = () => {
        const imageId = response.imageId;
        if (!imageId) {
            error(Strings.NO_CREATE_IMAGE_MESSAGE);
            return;
        }

        const payload = {
            imageId: imageId,
        };
        axios
            .post(`${Config.DECIDE_API_URL}`, payload, {
                headers: Config.COMMON_HEADER,
            })
            .then((response) => {
                const body = response.data;
                console.log(body);
                success(
                    `${Strings.SUCCESS_DECIDE_MESSAGE}(画像ID: ${imageId})`
                );

                setFadeState(FadeState.NO_FADE);
                setIsLoading(true);
                navigate(Strings.FINISH_URL);
            })
            .catch((e) => {
                // タイムアウトの場合
                if (e.code === 'ECONNABORTED') {
                    error(Strings.TIMEOUT_MESSAGE);
                } else {
                    const body = e.response.data;
                    console.log(body);
                    if (body && body.code && body.message) {
                        const message = imageId ? `(画像ID: ${imageId})` : '';
                        error(`${body.code}: ${body.message}${message}`);
                    } else {
                        error(Strings.FAILED_DECIDE_MESSAGE);
                    }
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
        }, Config.DURATION_MS);
    };

    const toAddGallery = () => {
        if (!response.imageId) {
            error(Strings.NO_CREATE_IMAGE_MESSAGE);
            return;
        }

        warn(Strings.COMING_SOON);
    };

    return (
        <section className={'result'}>
            <img className={'result_bk'} src={BackgroundImage} alt={''} />
            <div className={'bk_blur'} hidden={isLoading} />
            {isLoading && (
                <div className={'loading'}>
                    <MoonLoader color={Dimens.LOADER_COLOR} />
                </div>
            )}
            {!isLoading && (
                <div className={'result__container'}>
                    <div className={'left'}>
                        <FadeMotion isNormalOrder={false}>
                            {response ? (
                                <img
                                    className={'image'}
                                    src={response.imageUrl}
                                    alt={''}
                                />
                            ) : (
                                <NoImage />
                            )}
                        </FadeMotion>
                    </div>
                    <div className={'right'}>
                        <FadeSlideMotion
                            isNormalOrder={false}
                            fadeInY={Config.TRANSFORM_EXPLANATION_FADE_IN_Y}
                            fadeOutY={Config.TRANSFORM_EXPLANATION_FADE_OUT_Y}
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
                        </FadeSlideMotion>
                        <FadeMotion isNormalOrder={false}>
                            <div className={'first__button'}>
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
                            <div className={'second__button'}>
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
                            <div className={'third__button'}>
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
                        </FadeMotion>
                    </div>
                    <Footer />
                </div>
            )}
        </section>
    );
};

export default Result;

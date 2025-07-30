import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
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
import { decide, generate } from '../infrastructure/index';
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
import { FAILED_GENERATOR_MESSAGE } from '../constant/strings';

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
        const generateAIImage = async () => {
            const result = await generate(sliderValue, planetName);

            if (result.status >= 200 && result.status < 300) {
                setResponse(result);
            } else if (result.status === 504) {
                error(Strings.TIMEOUT_MESSAGE);
                setResponse(null);
            } else {
                if (result && result.code && result.message) {
                    error(`${result.code}: ${result.message}`);
                } else {
                    error(Strings.FAILED_GENERATOR_MESSAGE);
                }
                setResponse(null);
            }

            setIsLoading(false);
        };

        generateAIImage();
    }, []);

    const onDecide = async () => {
        const imageId = response.imageId;
        if (!imageId) {
            error(Strings.NO_CREATE_IMAGE_MESSAGE);
            return;
        }

        const result = await decide(imageId);
        if (result.status >= 200 && result.status < 300) {
            success(`${Strings.SUCCESS_DECIDE_MESSAGE}(画像ID: ${imageId})`);
            setFadeState(FadeState.NO_FADE);
            setIsLoading(true);
            navigate(Strings.FINISH_URL);
        } else if (result.status === 504) {
            error(Strings.TIMEOUT_MESSAGE);
        } else {
            if (result && result.code && result.message) {
                const message = imageId ? `(画像ID: ${imageId})` : '';
                error(`${result.code}: ${result.message}${message}`);
            } else {
                error(Strings.FAILED_DECIDE_MESSAGE);
            }
        }
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
                                <NoImage message={Strings.ERROR_OCCURRED} />
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
                                    detail={Strings.FAILED_GENERATOR_MESSAGE}
                                    rating={-1}
                                />
                            )}
                        </FadeSlideMotion>
                        <FadeMotion isNormalOrder={false}>
                            <div className={'first__button'}>
                                <Button
                                    className={'primary__pop__l'}
                                    name={Strings.DECISION_BUTTON}
                                    disabled={
                                        response === null ||
                                        response.imageId === null
                                    }
                                    disabledName={Strings.DECISION_BUTTON}
                                    onClick={() => onDecide()}
                                />
                            </div>
                            <div className={'second__button'}>
                                <Button
                                    className={'transparent__pop__s'}
                                    name={Strings.REMAKE_BUTTON}
                                    disabled={false}
                                    disabledName={Strings.REMAKE_BUTTON}
                                    onClick={() => remake()}
                                />
                            </div>
                            <div className={'third__button'}>
                                <Button
                                    className={'transparent__pop__m'}
                                    name={Strings.ADD_GALLERY_BUTTON}
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

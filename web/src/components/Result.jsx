import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Footer, NoImage, Spacer } from '../components/index';
import '../styles/Result.css';
import * as Config from '../constant/config';
import * as Dimens from '../constant/dimens';
import { MoonLoader } from 'react-spinners';
import axios from 'axios';
import * as Strings from '../constant/strings';
import { error, success, warn } from '../core/notify/notify';
import Explanation from './Explanation';
import {
    usePlanetNameStore,
    usePlanetTypeStore,
    useSliderStore,
} from '../stores/store';
import PlanetType from '../models/PlanetType';

const Result = () => {
    const [results, setResults] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const sliderValue = useSliderStore((state) => state.sliders);
    const planetName = usePlanetNameStore((state) => state.planetName);
    const setSliderValueByPlanetType = useSliderStore(
        (state) => state.setSliderValueByPlanetType
    );
    const setPlanetType = usePlanetTypeStore((state) => state.setPlanetType);
    const setPlanetName = usePlanetNameStore((state) => state.setPlanetName);

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
                    setResults(body);
                    setIsLoading(false);

                    success(Strings.SUCCESS_GENERATOR_MESSAGE);
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

                    setResults(null);
                    setIsLoading(false);
                    return null;
                });
        };

        generate();
    }, []);

    const decide = () => {
        if (!results.imageId) {
            error(Strings.NO_CREATE_IMAGE_MESSAGE);
            return;
        }

        const payload = {
            imageId: results.imageId,
        };
        axios
            .post(`${Config.DECIDE_API_URL}`, payload, {
                headers: Config.COMMON_HEADER,
            })
            .then((response) => {
                const body = response.data;
                console.log(body);
                success(
                    `${Strings.SUCCESS_DECIDE_MESSAGE}(画像ID: ${results.imageId}`
                );
                navigate(Strings.FINISH_URL);
            })
            .catch((e) => {
                const body = e.response.data;
                console.log(body);
                if (body && body.code && body.message) {
                    const message = results.imageId
                        ? `(画像ID: ${results.imageId})`
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
        setPlanetName('');
        navigate(Strings.GENERATOR_URL);
    };

    const toAddGallery = () => {
        if (!results.imageId) {
            error(Strings.NO_CREATE_IMAGE_MESSAGE);
            return;
        }

        warn(Strings.COMING_SOON);
    };

    return (
        <section className={'result'}>
            {isLoading && (
                <div className={'loading'}>
                    <MoonLoader color={Dimens.LOADER_COLOR} />
                </div>
            )}
            {!isLoading && (
                <div className={'result__container'}>
                    <div className={'left'}>
                        {results ? (
                            <img
                                className={'image'}
                                src={results.imageUrl}
                                alt={''}
                            />
                        ) : (
                            <NoImage />
                        )}
                    </div>
                    <div className={'right'}>
                        <Explanation
                            planetName={planetName}
                            detail={
                                'Coming soon... Coming soon... Coming soon... Coming soon... Coming soon... Coming soon... Coming soon... Coming soon... Coming soon... Coming soon... Coming soon... Coming soon... Coming soon... Coming soon... Coming soon...'
                            }
                            rating={results ? 1 : -1}
                        />
                        <div className={'buttons-container'}>
                            <Button
                                className={'button--primary'}
                                name={Strings.DECISION_BUTTON}
                                width={288}
                                disabled={
                                    results === null || results.imageId === null
                                }
                                disabledName={Strings.DECISION_BUTTON}
                                onClick={() => decide()}
                            />
                            <Spacer height={32} />
                            <Button
                                className={'button--primary'}
                                name={Strings.REMAKE_BUTTON}
                                width={288}
                                disabled={false}
                                disabledName={Strings.REMAKE_BUTTON}
                                onClick={() => remake()}
                            />
                            <Spacer height={24} />
                            <Button
                                className={'button--primary'}
                                name={Strings.ADD_GALLERY_BUTTON}
                                width={288}
                                disabled={
                                    results === null || results.imageId === null
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

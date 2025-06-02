import React, { useState } from 'react';
import { Button, NoImage, RadarChart, Parameters } from '../components/index';
import '../styles/Generator.css';
import * as Strings from '../constant/strings';
import * as Config from '../constant/config';
import * as Dimens from '../constant/dimens';
import { MoonLoader } from 'react-spinners';
import axios from 'axios';
import { usePlanetNameStore, useSliderStore } from '../stores/store';
import { ToastContainer } from 'react-toastify';
import { error, success, warn } from '../core/notify/notify';
import { validateMinAndMax } from '../core/validator/lengthValidator';

const Generator = () => {
    const [results, setResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const sliderValue = useSliderStore((state) => state.sliders);
    const planetName = usePlanetNameStore((state) => state.planetName);

    const handleClick = async () => {
        if (!validateMinAndMax(planetName, 1, 6)) {
            warn(Strings.PLANET_NAME_VALIDATE_WARN_MESSAGE);
            return;
        }

        setIsLoading(true);
        await generate();
    };

    const generate = async () => {
        const payload = {
            ...sliderValue,
            planetName: `${planetName}${Strings.PLANET_NAME_SUFFIX}`,
        };
        axios
            .post(`${Config.GENERATE_API_URL}`, payload, {
                headers: Config.COMMON_HEADER,
            })
            .then((response) => {
                setResults(response.data);
                setIsLoading(false);
                success(Strings.SUCCESS_GENERATOR_MESSAGE);
                return response.data;
            })
            .catch((e) => {
                console.log(e);
                setResults(null);
                setIsLoading(false);
                error(Strings.FAILED_GENERATOR_MESSAGE);
                return null;
            });
    };

    return (
        <section className={'generator'}>
            <div className={'left'}>
                <Parameters disabled={isLoading} />
                <Button
                    className={'button--primary'}
                    name={Strings.GENERATE_START_BUTTON}
                    disabled={isLoading}
                    disabledName={Strings.LOADING_BUTTON}
                    onClick={() => handleClick()}
                />
            </div>
            <div className={'right'}>
                {!results && !isLoading && <NoImage />}
                {isLoading && (
                    <div className={'loading'}>
                        <MoonLoader color={Dimens.LOADER_COLOR} />
                    </div>
                )}
                {results && !isLoading && (
                    <div className={'image-container'}>
                        <img
                            className={'image'}
                            src={results.imageUrl}
                            alt={''}
                        />
                        <div className={'chart-wrapper'}>
                            <p className={'label'}>{Strings.DATA_LABEL}</p>
                            <RadarChart results={results} />
                        </div>
                    </div>
                )}
            </div>
            <ToastContainer />
        </section>
    );
};

export default Generator;

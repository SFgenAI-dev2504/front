import React, { useState } from 'react';
import { Button, NoImage, RadarChart, Parameters } from '../components/index';
import '../styles/Generator.css';
import * as Strings from '../constant/strings';
import * as Config from '../constant/config';
import * as Dimens from '../constant/dimens';
import { FadeLoader, MoonLoader } from 'react-spinners';
import axios from 'axios';
import { useSliderStore } from '../stores/store';
import { ToastContainer, toast } from 'react-toastify';

const Generator = () => {
    const [results, setResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const sliderValue = useSliderStore((state) => state.sliders);

    const handleClick = async () => {
        setIsLoading(true);
        await generate();
    };

    const generate = async () => {
        axios
            .post(
                `${Config.GENERATE_API_URL}`,
                {
                    diameter: sliderValue[0],
                    mass: sliderValue[1],
                    averageDistanceFromTheSun: sliderValue[2],
                    revolutionPeriod: sliderValue[3],
                    rotationPeriod: sliderValue[4],
                },
                {
                    headers: Config.COMMON_HEADER,
                }
            )
            .then((response) => {
                setResults(response.data);
                setIsLoading(false);
                notify(true);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                setResults(null);
                setIsLoading(false);
                notify(false);
                return null;
            });
    };

    const notify = (isSuccess) => {
        const option = Dimens.TOAST_OPTION;
        if (isSuccess) {
            toast.info(Strings.SUCCESS_MESSAGE, option);
        } else {
            toast.error(Strings.FAILED_MESSAGE, option);
        }
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
                        <img src={results.imageUrl} alt={''} />
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

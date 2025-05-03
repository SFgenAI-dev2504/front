import React, { useState, useTransition } from 'react';
import { Button, NoImage, RadarChart } from '../components/index';
import '../styles/Generator.css';
import * as Strings from '../constant/strings';
import { MoonLoader } from 'react-spinners';
import cardImg from '../assets/images/test_image.png';
import Parameters from './Parameters';

const Generator = () => {
    const [results, setResults] = useState(null);
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(async () => {
            const res = await fetchFakeData();
            setResults(res);
        });
    };

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const fetchFakeData = async () => {
        await sleep(1000);
        return {
            data: [
                {
                    id: 1,
                    element1: Math.floor(Math.random() * 101),
                    element2: Math.floor(Math.random() * 101),
                    element3: Math.floor(Math.random() * 101),
                    element4: Math.floor(Math.random() * 101),
                    element5: Math.floor(Math.random() * 101),
                },
                {
                    id: 2,
                    element1: Math.floor(Math.random() * 101),
                    element2: Math.floor(Math.random() * 101),
                    element3: Math.floor(Math.random() * 101),
                    element4: Math.floor(Math.random() * 101),
                    element5: Math.floor(Math.random() * 101),
                },
            ],
        };
    };

    return (
        <section className="generator">
            <div className={'left'}>
                <Parameters />
                <Button
                    className={'button--primary'}
                    name={Strings.GENERATE_START_BUTTON}
                    onClick={() => handleClick()}
                />
            </div>
            <div className={'right'}>
                {!results && !isPending && <NoImage />}
                {isPending && (
                    <div className="loading">
                        <MoonLoader color="#00aac9" loading size={40} />
                    </div>
                )}
                {results && !isPending && (
                    <div className="image-container">
                        <img src={cardImg} alt={''} />
                        <div className="chart-wrapper">
                            <p className="label">- DATA -</p>
                            <RadarChart results={results} />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Generator;

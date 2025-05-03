import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/index';
import '../styles/Generator.css';
import * as Strings from '../constant/strings';
import axios from 'axios';
import { MoonLoader } from 'react-spinners';
import cardImg from '../assets/images/test_image.png';
import RadarChart from './RadarChart';

const Generator = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const back = () => {
        navigate(Strings.PARAM_SETTING_URL, { replace: true });
    };

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const fetchFakeData = async () => {
        await sleep(1000);
        return { message: 'これは擬似データです' };
    };

    useEffect(() => {
        const loadData = async () => {
            const res = await fetchFakeData();
            setData(res);
        };

        loadData();
    }, []);

    return (
        <section className="generator">
            {data ? (
                <div className="container">
                    <div className="image-wrapper">
                        <img src={cardImg} alt={''} />
                        <div className="chart-wrapper">
                            <p className="label">- DATA -</p>
                            <RadarChart />
                        </div>
                    </div>
                    <Button
                        className={'button--primary'}
                        name={Strings.BACK_BUTTON}
                        onClick={() => back()}
                    />
                </div>
            ) : (
                <div className="loading">
                    <MoonLoader color="#00aac9" loading size={64} />
                </div>
            )}
        </section>
    );
};

export default Generator;

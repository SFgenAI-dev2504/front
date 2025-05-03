import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/index';
import '../styles/Home.css';
import * as Strings from '../constant/strings';

const Home = () => {
    const navigate = useNavigate();

    const toGenerate = () => {
        navigate(Strings.GENERATOR_URL);
    };

    return (
        <section className="home">
            <p className="text">画像生成</p>
            <Button
                className={'button--primary'}
                name={Strings.PARAM_SETTING_BUTTON}
                onClick={() => toGenerate()}
            />
        </section>
    );
};

export default Home;

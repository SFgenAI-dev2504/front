import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/index';
import '../styles/Home.css';
import * as Strings from '../strings';

const Home = () => {
    const navigate = useNavigate();

    const toGenerate = () => {
        alert('Hello world!');
        // history.push(Strings.GENERATOR_URL)
    };

    return (
        <section className="home">
            <p className="text">画像生成</p>
            <Button className={'button--primary'} name={Strings.GENERATE_START_BUTTON} onClick={() => toGenerate()} />
        </section>
    );
};

export default Home;

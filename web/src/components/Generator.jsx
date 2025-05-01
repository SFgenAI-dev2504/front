import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Parameters } from '../components/index';
import '../styles/Generator.css';
import * as Strings from '../constant/strings';

const Generator = () => {
    const navigate = useNavigate();

    const toGenerate = () => {
        alert('Hello world!');
        // history.push(Strings.GENERATOR_URL)
    };

    return (
        <section className="generator">
            <Button
                className={'button--primary'}
                name={Strings.GENERATE_START_BUTTON}
                onClick={() => toGenerate()}
            />
        </section>
    );
};

export default Generator;

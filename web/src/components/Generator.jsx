import React from 'react';
import { Button, NoImage, Parameters, Spacer } from '../components/index';
import '../styles/Generator.css';
import * as Strings from '../constant/strings';
import { useNavigate } from 'react-router-dom';
import { usePlanetNameStore } from '../stores/store';
import { ToastContainer } from 'react-toastify';
import { warn } from '../core/notify/notify';
import { validateMinAndMax } from '../core/validator/lengthValidator';

const Generator = () => {
    const navigate = useNavigate();
    const planetName = usePlanetNameStore((state) => state.planetName);

    const handleClick = () => {
        if (!validateMinAndMax(planetName, 1, 6)) {
            warn(Strings.PLANET_NAME_VALIDATE_WARN_MESSAGE);
            return;
        }

        navigate(Strings.RESULT_URL);
    };

    return (
        <section className={'generator'}>
            <div className={'left'}>
                <NoImage />
            </div>
            <div className={'right'}>
                <Parameters disabled={false} />
                <Spacer height={24} />
                <Button
                    className={'button--primary'}
                    name={Strings.GENERATE_BUTTON}
                    width={288}
                    disabled={false}
                    disabledName={Strings.GENERATE_BUTTON}
                    onClick={() => handleClick()}
                />
            </div>
            <ToastContainer />
        </section>
    );
};

export default Generator;

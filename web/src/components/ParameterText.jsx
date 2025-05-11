import React from 'react';
import '../styles/ParameterText.css';
import { usePlanetNameStore } from '../stores/store';

const ParameterText = (props) => {
    const planetName = usePlanetNameStore((state) => state.planetName);
    const setPlanetName = usePlanetNameStore((state) => state.setPlanetName);

    return (
        <section className={'parameter__text'}>
            <p className={'name'}>{props.name}</p>
            <input
                className={'planet__name'}
                name={'input'}
                type={'text'}
                autoComplete={'off'}
                value={planetName}
                onChange={(e) => setPlanetName(e.target.value)}
                disabled={props.disabled}
            />
        </section>
    );
};

export default ParameterText;

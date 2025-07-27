import React from 'react';
import { usePlanetNameStore } from '../stores/store';
import * as Strings from '../constant/strings';
import '../styles/ParameterText.css';

const ParameterText = (props) => {
    const planetName = usePlanetNameStore((state) => state.planetName);
    const setPlanetName = usePlanetNameStore((state) => state.setPlanetName);

    return (
        <section className={'parameter__text'}>
            <p className={'name__label'}>{props.name}</p>
            <input
                className={'planet__name'}
                name={'input'}
                type={'text'}
                autoComplete={'off'}
                value={planetName}
                disabled={props.disabled}
                onChange={(e) => {
                    setPlanetName(e.target.value);
                }}
            />
            <p className={'suffix'}>{Strings.PLANET_NAME_SUFFIX}</p>
        </section>
    );
};

export default ParameterText;

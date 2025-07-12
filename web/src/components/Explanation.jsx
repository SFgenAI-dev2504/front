import React from 'react';
import '../styles/Explanation.css';
import * as Strings from '../constant/strings';
import { Spacer } from './index';

const Explanation = (props) => {
    const convertRarity = (rating) => {
        return '★'.repeat(rating);
    };

    return (
        <section className={'explanation'}>
            <Spacer height={40} />
            <p
                className={'planet-name'}
            >{`${props.planetName}${Strings.PLANET_NAME_SUFFIX}`}</p>
            <Spacer height={24} />
            <p className={'detail'}>{props.detail}</p>
            <Spacer height={24} />
            <p
                className={'rating'}
            >{`${Strings.RATING_LABEL}${convertRarity(props.rating)}`}</p>
            <Spacer height={40} />
        </section>
    );
};

export default Explanation;

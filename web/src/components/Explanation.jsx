import React from 'react';
import '../styles/Explanation.css';
import * as Strings from '../constant/strings';
import { Spacer } from './index';

const Explanation = (props) => {
    const MAX_RATING = 5;
    const convertRarity = (rating) => {
        if (rating < 1) {
            return 'ー';
        }

        const frame_rating = MAX_RATING - rating;
        '☆'.repeat(frame_rating);
        return `${'☆'.repeat(frame_rating)}${'★'.repeat(rating)}`;
    };

    return (
        <section className={'explanation'}>
            <Spacer height={40} />
            <p
                className={'planet-name'}
            >{`${props.planetName}${Strings.PLANET_NAME_KANA_SUFFIX}`}</p>
            <Spacer height={24} />
            <p className={'detail'}>{props.detail ? props.detail : ''}</p>
            <Spacer height={24} />
            <p
                className={'rating'}
            >{`${Strings.RATING_LABEL}${convertRarity(props.rating)}`}</p>
            <Spacer height={40} />
        </section>
    );
};

export default Explanation;

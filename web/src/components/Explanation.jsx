import React from 'react';
import { Spacer } from './index';
import { evaluate } from '../core/util/ratingConverter';
import * as Strings from '../constant/strings';
import ResultBackgroundImage from '../assets/images/result_background.png';
import '../styles/Explanation.css';

const Explanation = (props) => {
    return (
        <section className={'explanation'}>
            <img src={ResultBackgroundImage} alt={''} />
            <div className={'explanation__container'}>
                <p
                    className={'planet-name'}
                >{`${props.planetName}${Strings.PLANET_NAME_KANA_SUFFIX}`}</p>
                <Spacer height={24} />
                <p className={'detail'}>{props.detail ? props.detail : ''}</p>
                <Spacer height={24} />
                <p
                    className={'rating'}
                >{`${Strings.RATING_LABEL}${evaluate(props.rating)}`}</p>
                <Spacer height={40} />
            </div>
        </section>
    );
};

export default Explanation;

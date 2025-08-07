import React from 'react';
import { Spacer } from './index';
import { evaluate } from '../core/util/ratingConverter';
import { info } from '../core/notify/notify';
import * as Strings from '../constant/strings';
import * as Config from '../constant/config';
import ResultBackgroundImage from '../assets/images/result_background.png';
import '../styles/Explanation.css';

const Explanation = (props) => {
    const segmenter = new Intl.Segmenter('ja', { granularity: 'grapheme' });
    const segments = [...segmenter.segment(props.detail)];

    const isOverMaxLength = () => {
        return segments.length > Config.EXPLANATION_MAX_LENGTH;
    };

    const shortenDetail = () => {
        return (
            segments
                .slice(0, Config.EXPLANATION_MAX_LENGTH)
                .map((s) => s.segment)
                .join('') + Strings.PLANET_NAME_MAX_LENGTH_SUFFIX
        );
    };

    return (
        <section className={'explanation'}>
            <img src={ResultBackgroundImage} alt={''} />
            <div className={'explanation__container'}>
                <p
                    className={'planet-name'}
                >{`${props.planetName ? props.planetName : '-'}${Strings.PLANET_NAME_KANA_SUFFIX}`}</p>
                <Spacer height={24} />
                {isOverMaxLength && (
                    <p className={'detail'}>
                        {shortenDetail()}
                        <button
                            className={'read-more'}
                            onClick={() => info(props.detail)}
                        >
                            {Strings.READ_MORE_LABEL}
                        </button>
                    </p>
                )}
                {!isOverMaxLength && <p className={'detail'}>{props.detail}</p>}
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

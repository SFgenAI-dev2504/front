import React, { useState } from 'react';
import { Modal, Spacer } from './index';
import { evaluate } from '../core/util/ratingConverter';
import * as Strings from '../constant/strings';
import * as Config from '../constant/config';
import ResultBackgroundImage from '../assets/images/result_background.png';
import '../styles/Explanation.css';

const Explanation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
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
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                content={props.detail}
            />
            <div className={'explanation__container'}>
                <p
                    className={'planet-name'}
                >{`${props.planetName ? props.planetName : '-'}${Strings.PLANET_NAME_KANA_SUFFIX}`}</p>
                <Spacer height={24} />
                {isOverMaxLength() && (
                    <p className={'detail'}>
                        {shortenDetail()}
                        <button
                            className={'read-more'}
                            onClick={() => setIsOpen(true)}
                        >
                            {Strings.READ_MORE_LABEL}
                        </button>
                    </p>
                )}
                {!isOverMaxLength() && (
                    <p className={'detail'}>{props.detail}</p>
                )}
                <Spacer height={24} />
                <p
                    className={'rating'}
                >{`${Strings.RATING_LABEL}${evaluate(props.rating)}`}</p>
                <Spacer height={40} />
                <p className={'note'}>{Strings.GENERATE_NOTE}</p>
            </div>
        </section>
    );
};

export default Explanation;

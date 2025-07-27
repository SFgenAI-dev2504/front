import React from 'react';
import * as Strings from '../constant/strings';
import '../styles/NoImage.css';

const NoImage = () => {
    return (
        <section className={'no-image'}>
            <p>{Strings.NO_IMAGE}</p>
        </section>
    );
};

export default NoImage;

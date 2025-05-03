import React from 'react';
import '../styles/NoImage.css';
import * as Strings from '../constant/strings';

const NoImage = () => {
    return (
        <section className={'no-image'}>
            <p>{Strings.NO_IMAGE}</p>
        </section>
    );
};

export default NoImage;

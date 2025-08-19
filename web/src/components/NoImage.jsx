import React from 'react';
import '../styles/NoImage.css';

const NoImage = (props) => {
    return (
        <section className={'no-image'}>
            <p>{props.message}</p>
        </section>
    );
};

export default NoImage;

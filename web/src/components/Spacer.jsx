import React from 'react';
import '../styles/Spacer.css';

const Spacer = (props) => {
    const height = props.height === null ? 0 : props.height;
    return <div style={{ height }} className={'spacer'}></div>;
};

export default Spacer;

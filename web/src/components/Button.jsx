import React from 'react';
import '../styles/Button.css';

const Button = (props) => {
    const width = props.width === null ? 0 : props.width;
    return (
        <button
            style={{ width }}
            className={props.className}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.disabled ? props.disabledName : props.name}
        </button>
    );
};

export default Button;

import React from 'react';
import '../styles/Button.css';

const Button = (props) => {
    return (
        <button
            className={props.className}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.disabled ? props.disabledName : props.name}
        </button>
    );
};

export default Button;

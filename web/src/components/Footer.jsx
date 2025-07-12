import React from 'react';
import '../styles/Footer.css';
import { COPY_RIGHT } from '../constant/strings';

const Footer = () => {
    return (
        <footer className={'footer'}>
            <p className={'footer__copy'}>{COPY_RIGHT}</p>
        </footer>
    );
};

export default Footer;

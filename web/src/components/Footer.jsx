import React from 'react';
import * as Strings from '../constant/strings';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className={'footer'}>
            <p className={'footer__copy'}>{Strings.COPY_RIGHT}</p>
        </footer>
    );
};

export default Footer;

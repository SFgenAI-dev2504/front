import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import * as Strings from '../constant/strings';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__logo">
                <Link to={Strings.HOME_URL}>
                    <img className="logo" src={Logo} alt="Space Fight" />
                </Link>
            </h1>
        </header>
    );
};

export default Header;

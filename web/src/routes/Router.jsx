import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Generator } from '../components';
import * as Strings from '../constant/strings';

const Router = () => {
    return (
        <Routes>
            <Route path={Strings.HOME_URL} element={<Home />} />
            <Route path={Strings.GENERATOR_URL} element={<Generator />} />
        </Routes>
    );
};

export default Router;

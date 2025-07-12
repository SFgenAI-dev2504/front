import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Generator, Result, Finish } from '../components';
import * as Strings from '../constant/strings';

const Router = () => {
    return (
        <Routes>
            <Route path={Strings.HOME_URL} element={<Home />} />
            <Route path={Strings.GENERATOR_URL} element={<Generator />} />
            <Route path={Strings.RESULT_URL} element={<Result />} />
            <Route path={Strings.FINISH_URL} element={<Finish />} />
        </Routes>
    );
};

export default Router;

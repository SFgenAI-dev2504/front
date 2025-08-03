import React from 'react';
import { AnimatePresence } from 'motion/react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home, Generator, Result, Finish } from '../views/index';
import * as Strings from '../constant/strings';

const Router = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path={Strings.HOME_URL} element={<Home />} />
                <Route path={Strings.GENERATOR_URL} element={<Generator />} />
                <Route path={Strings.RESULT_URL} element={<Result />} />
                <Route path={Strings.FINISH_URL} element={<Finish />} />
            </Routes>
        </AnimatePresence>
    );
};

export default Router;

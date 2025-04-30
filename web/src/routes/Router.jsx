import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "../components";
import * as Strings from "../strings";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={Strings.HOME_URL} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default Router;

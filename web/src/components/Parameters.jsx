import React from 'react';
import '../styles/Parameters.css';
import * as Strings from '../constant/strings';
import * as Config from '../constant/config';
import { Parameter } from './index';

const Parameters = () => {
    const calc = (value) => {
        return value * 100;
    };

    return (
        <section className="parameters">
            <div className="container">
                <p className="title">{Strings.INPUT_INFO_LABEL}</p>
                <Parameter
                    name={Strings.DIAMETER}
                    unit={Strings.DIAMETER_UNIT}
                    min={Config.DIAMETER_MIN}
                    max={Config.DIAMETER_MAX}
                    step={Config.DIAMETER_STEP}
                    defaultValue={Config.DIAMETER_DEFAULT}
                    onChange={calc}
                    index={0}
                    visible={true}
                />
                <Parameter
                    name={Strings.MASS}
                    unit={Strings.MASS_UNIT}
                    min={Config.MASS_MIN}
                    max={Config.MASS_MAX}
                    step={Config.MASS_STEP}
                    defaultValue={Config.MASS_DEFAULT}
                    onChange={calc}
                    index={1}
                    visible={false}
                />
                <Parameter
                    name={Strings.AVERAGE_DISTANCE_FROM_THE_SUN}
                    unit={Strings.AVERAGE_DISTANCE_FROM_THE_SUN_UNIT}
                    min={Config.AVERAGE_DISTANCE_FROM_THE_SUN_MIN}
                    max={Config.AVERAGE_DISTANCE_FROM_THE_SUN_MAX}
                    step={Config.AVERAGE_DISTANCE_FROM_THE_SUN_STEP}
                    defaultValue={Config.AVERAGE_DISTANCE_FROM_THE_SUN_DEFAULT}
                    onChange={calc}
                    index={2}
                    visible={false}
                />
                <Parameter
                    name={Strings.REVOLUTION_PERIOD}
                    unit={Strings.REVOLUTION_PERIOD_UNIT}
                    min={Config.REVOLUTION_PERIOD_MIN}
                    max={Config.REVOLUTION_PERIOD_MAX}
                    step={Config.REVOLUTION_PERIOD_STEP}
                    defaultValue={Config.REVOLUTION_PERIOD_DEFAULT}
                    onChange={calc}
                    index={3}
                    visible={false}
                />
                <Parameter
                    name={Strings.ROTATION_PERIOD}
                    unit={Strings.ROTATION_PERIOD_UNIT}
                    min={Config.ROTATION_PERIOD_MIN}
                    max={Config.ROTATION_PERIOD_MAX}
                    step={Config.ROTATION_PERIOD_STEP}
                    defaultValue={Config.ROTATION_PERIOD_DEFAULT}
                    onChange={calc}
                    index={4}
                    visible={false}
                />
            </div>
        </section>
    );
};

export default Parameters;

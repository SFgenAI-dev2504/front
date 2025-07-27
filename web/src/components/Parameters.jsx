import React from 'react';
import { Parameter, ParameterText, PlanetTypeSelection, Spacer } from './index';
import PromptType from '../models/PromptType';
import {
    calcTemperature,
    calcDiameter,
    calcDistance,
    calcGravity,
} from '../core/util/earthRelativeCalculator';
import * as Strings from '../constant/strings';
import * as Config from '../constant/config';
import ParamBackgroundImage from '../assets/images/param_background.png';
import '../styles/Parameters.css';

const Parameters = () => {
    return (
        <section className={'parameters'}>
            <img src={ParamBackgroundImage} alt={''} />
            <div className={'container'}>
                <div className={'first_row'}>
                    <p className={'title'}>{Strings.PARAMETER_INPUT_LABEL}</p>
                    <PlanetTypeSelection />
                </div>
                <Spacer height={24} />
                <div className={'rest_row'}>
                    <p className={'subtitle'}>
                        {Strings.PARAMETER_TIMES_LABEL}
                    </p>
                    <Parameter
                        type={PromptType.DIAMETER}
                        name={Strings.DIAMETER}
                        unit={Strings.DIAMETER_UNIT}
                        min={Config.DIAMETER_MIN}
                        max={Config.DIAMETER_MAX}
                        step={Config.DIAMETER_STEP}
                        onChange={calcDiameter}
                        index={0}
                    />
                    <Spacer height={6} />
                    <Parameter
                        type={PromptType.GRAVITY}
                        name={Strings.GRAVITY}
                        unit={Strings.GRAVITY_UNIT}
                        min={Config.GRAVITY_MIN}
                        max={Config.GRAVITY_MAX}
                        step={Config.GRAVITY_STEP}
                        onChange={calcGravity}
                        index={1}
                    />
                    <Spacer height={6} />
                    <Parameter
                        type={PromptType.DISTANCE}
                        name={Strings.DISTANCE}
                        unit={Strings.DISTANCE_UNIT}
                        min={Config.DISTANCE_MIN}
                        max={Config.DISTANCE_MAX}
                        step={Config.DISTANCE_STEP}
                        onChange={calcDistance}
                        index={2}
                    />
                    <Spacer height={6} />
                    <Parameter
                        type={PromptType.TEMPERATURE}
                        name={Strings.TEMPERATURE}
                        unit={Strings.TEMPERATURE_UNIT}
                        min={Config.TEMPERATURE_MIN}
                        max={Config.TEMPERATURE_MAX}
                        step={Config.TEMPERATURE_STEP}
                        onChange={calcTemperature}
                        index={3}
                    />
                    <Spacer height={6} />
                    <Parameter
                        type={PromptType.ATMOSPHERE}
                        name={Strings.ATMOSPHERE}
                        unit={Strings.ATMOSPHERE_UNIT}
                        min={Config.ATMOSPHERE_MIN}
                        max={Config.ATMOSPHERE_MAX}
                        step={Config.ATMOSPHERE_STEP}
                        onChange={null}
                        index={4}
                    />
                    <Spacer height={6} />
                    <Parameter
                        type={PromptType.WATER}
                        name={Strings.WATER}
                        unit={Strings.WATER_UNIT}
                        min={Config.WATER_MIN}
                        max={Config.WATER_MAX}
                        step={Config.WATER_STEP}
                        onChange={null}
                        index={5}
                    />
                    <Spacer height={6} />
                    <Parameter
                        type={PromptType.TERRAIN}
                        name={Strings.TERRAIN}
                        unit={Strings.TERRAIN_UNIT}
                        min={Config.TERRAIN_MIN}
                        max={Config.TERRAIN_MAX}
                        step={Config.TERRAIN_STEP}
                        onChange={null}
                        index={6}
                    />
                    <Spacer height={6} />
                    <Parameter
                        type={PromptType.VOLCANO}
                        name={Strings.VOLCANO}
                        unit={Strings.VOLCANO_UNIT}
                        min={Config.VOLCANO_MIN}
                        max={Config.VOLCANO_MAX}
                        step={Config.VOLCANO_STEP}
                        onChange={null}
                        index={7}
                    />
                    <Spacer height={6} />
                    <Parameter
                        type={PromptType.AURORA}
                        name={Strings.AURORA}
                        unit={Strings.AURORA_UNIT}
                        min={Config.AURORA_MIN}
                        max={Config.AURORA_MAX}
                        step={Config.AURORA_STEP}
                        onChange={null}
                        index={8}
                    />
                    <Spacer height={8} />
                    <ParameterText name={Strings.PLANET_NAME} />
                </div>
            </div>
        </section>
    );
};

export default Parameters;

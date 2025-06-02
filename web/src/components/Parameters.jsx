import React from 'react';
import '../styles/Parameters.css';
import * as Strings from '../constant/strings';
import * as Config from '../constant/config';
import { Parameter, ParameterText, PlanetTypeSelection } from './index';
import {
    calcAverageSurfaceTemperature,
    calcDiameter,
    calcDistanceFromSun,
    calcGravity,
} from '../core/util/earthRelativeCalculator';
import PromptType from '../models/PromptType';

const Parameters = (props) => {
    return (
        <section className={'parameters'}>
            <div className={'container'}>
                <div className={'first_row'}>
                    <p className={'title'}>{Strings.PARAMETER_INPUT_LABEL}</p>
                    <PlanetTypeSelection disabled={props.disabled} />
                </div>
                <Parameter
                    type={PromptType.DIAMETER}
                    name={Strings.DIAMETER}
                    unit={Strings.DIAMETER_UNIT}
                    min={Config.DIAMETER_MIN}
                    max={Config.DIAMETER_MAX}
                    step={Config.DIAMETER_STEP}
                    defaultValue={props.defaultValue}
                    onChange={calcDiameter}
                    index={0}
                    subtileLabelVisible={true}
                    disabled={props.disabled}
                />
                <Parameter
                    type={PromptType.GRAVITY}
                    name={Strings.GRAVITY}
                    unit={Strings.GRAVITY_UNIT}
                    min={Config.GRAVITY_MIN}
                    max={Config.GRAVITY_MAX}
                    step={Config.GRAVITY_STEP}
                    defaultValue={props.defaultValue}
                    onChange={calcGravity}
                    index={1}
                    subtileLabelVisible={false}
                    disabled={props.disabled}
                />
                <Parameter
                    type={PromptType.DISTANCE_FROM_SUN}
                    name={Strings.DISTANCE_FROM_THE_SUN}
                    unit={Strings.DISTANCE_FROM_THE_SUN_UNIT}
                    min={Config.DISTANCE_FROM_SUN_MIN}
                    max={Config.DISTANCE_FROM_SUN_MAX}
                    step={Config.DISTANCE_FROM_SUN_STEP}
                    defaultValue={props.defaultValue}
                    onChange={calcDistanceFromSun}
                    index={2}
                    subtileLabelVisible={false}
                    disabled={props.disabled}
                />
                <Parameter
                    type={PromptType.AVERAGE_SURFACE_TEMPERATURE}
                    name={Strings.AVERAGE_SURFACE_TEMPERATURE}
                    unit={Strings.AVERAGE_SURFACE_TEMPERATURE_UNIT}
                    min={Config.AVERAGE_SURFACE_TEMPERATURE_MIN}
                    max={Config.AVERAGE_SURFACE_TEMPERATURE_MAX}
                    step={Config.AVERAGE_SURFACE_TEMPERATURE_STEP}
                    defaultValue={props.defaultValue}
                    onChange={calcAverageSurfaceTemperature}
                    index={3}
                    subtileLabelVisible={false}
                    disabled={props.disabled}
                />
                <Parameter
                    type={PromptType.ATMOSPHERIC_DENSITY}
                    name={Strings.ATMOSPHERIC_DENSITY}
                    unit={Strings.ATMOSPHERIC_DENSITY_UNIT}
                    min={Config.ATMOSPHERIC_DENSITY_MIN}
                    max={Config.ATMOSPHERIC_DENSITY_MAX}
                    step={Config.ATMOSPHERIC_DENSITY_STEP}
                    defaultValue={props.defaultValue}
                    onChange={null}
                    index={4}
                    subtileLabelVisible={false}
                    disabled={props.disabled}
                />
                <Parameter
                    type={PromptType.WATER_AMOUNT}
                    name={Strings.WATER_AMOUNT}
                    unit={Strings.WATER_AMOUNT_UNIT}
                    min={Config.WATER_AMOUNT_MIN}
                    max={Config.WATER_AMOUNT_MAX}
                    step={Config.WATER_AMOUNT_STEP}
                    defaultValue={props.defaultValue}
                    onChange={null}
                    index={5}
                    subtileLabelVisible={false}
                    disabled={props.disabled}
                />
                <Parameter
                    type={PromptType.SURFACE_UNEVENNESS}
                    name={Strings.SURFACE_UNEVENNESS}
                    unit={Strings.SURFACE_UNEVENNESS_UNIT}
                    min={Config.SURFACE_UNEVENNESS_MIN}
                    max={Config.SURFACE_UNEVENNESS_MAX}
                    step={Config.SURFACE_UNEVENNESS_STEP}
                    defaultValue={props.defaultValue}
                    onChange={null}
                    index={6}
                    subtileLabelVisible={false}
                    disabled={props.disabled}
                />
                <Parameter
                    type={PromptType.VOLCANIC_ACTIVITY}
                    name={Strings.VOLCANIC_ACTIVITY}
                    unit={Strings.VOLCANIC_ACTIVITY_UNIT}
                    min={Config.VOLCANIC_ACTIVITY_MIN}
                    max={Config.VOLCANIC_ACTIVITY_MAX}
                    step={Config.VOLCANIC_ACTIVITY_STEP}
                    defaultValue={props.defaultValue}
                    onChange={null}
                    index={7}
                    subtileLabelVisible={false}
                    disabled={props.disabled}
                />
                <Parameter
                    type={PromptType.AURORA}
                    name={Strings.AURORA}
                    unit={Strings.AURORA_UNIT}
                    min={Config.AURORA_MIN}
                    max={Config.AURORA_MAX}
                    step={Config.AURORA_STEP}
                    defaultValue={props.defaultValue}
                    onChange={null}
                    index={8}
                    subtileLabelVisible={false}
                    disabled={props.disabled}
                />
                <ParameterText
                    name={Strings.PLANET_NAME}
                    disabled={props.disabled}
                />
            </div>
        </section>
    );
};

export default Parameters;

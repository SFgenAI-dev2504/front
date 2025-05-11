import React from 'react';
import '../styles/Parameter.css';
import Slider from '@mui/material/Slider';
import { useSliderStore } from '../stores/store';
import * as Strings from '../constant/strings';

const Parameter = (props) => {
    const value = useSliderStore((state) => state.sliders[props.index]);
    const setSliderValue = useSliderStore((state) => state.setSliderValue);

    return (
        <section className={'parameter'}>
            <div className={'label__container'}>
                <p className={'name'}>{props.name}</p>
                <p className={'value'}>{value}</p>
                {props.name === Strings.MASS ? (
                    <p className={'unit'}>
                        {props.unit}
                        <sup>{Strings.MASS_END_UNIT}</sup>
                        <span>)</span>
                    </p>
                ) : (
                    <p className={'unit'}>{props.unit}</p>
                )}
            </div>
            <div className={'slidebar__container'}>
                <div className={'slidebar'}>
                    <Slider
                        aria-label={props.name}
                        value={value}
                        onChange={(e, newValue) =>
                            setSliderValue(props.index, newValue)
                        }
                        color={'primary'}
                        defaultValue={props.defaultValue}
                        valueLabelDisplay={'auto'}
                        shiftStep={props.step}
                        step={props.step}
                        marks
                        min={props.min}
                        max={props.max}
                        disabled={props.disabled}
                    />
                </div>
                <div className={'subtitle'}>
                    {props.visible && (
                        <p className={'subtitle__label'}>
                            {Strings.PARAMETER_DETAIL_LABEL}
                        </p>
                    )}
                    <p className={'subtitle__value'}>
                        {props.onChange(value) + ' 倍'}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Parameter;

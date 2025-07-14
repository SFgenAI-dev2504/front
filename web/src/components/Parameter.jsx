import React from 'react';
import '../styles/Parameter.css';
import Slider from '@mui/material/Slider';
import { useSliderStore } from '../stores/store';
import * as Strings from '../constant/strings';
import { toLocaleString } from '../core/util/stringFormat';

const Parameter = (props) => {
    const value = useSliderStore((state) => state.sliders[props.type]);
    const setSliderValueByPromptType = useSliderStore(
        (state) => state.setSliderValueByPromptType
    );

    return (
        <section className={'parameter'}>
            <div className={'label__container'}>
                <p className={'name'}>{props.name}</p>
                <p className={'value'}>{toLocaleString(props.type, value)}</p>
                <p className={'unit'}>{props.unit}</p>
            </div>
            <div className={'slidebar__container'}>
                <div className={'slidebar'}>
                    <Slider
                        aria-label={props.name}
                        value={value}
                        onChange={(e, newValue) =>
                            setSliderValueByPromptType(props.type, newValue)
                        }
                        sx={{
                            color: '#00aac9',
                            '& .MuiSlider-thumb': {
                                backgroundColor: '#00aac9',
                                boxShadow: '0 0 4px 0px rgba(0, 244, 220, 1)',
                                width: 10,
                                height: 10,
                            },
                            '& .MuiSlider-track': {
                                backgroundColor: '#00aac9',
                                boxShadow: '0 0 4px 0px rgba(0, 244, 220, 1)',
                                height: 2,
                            },
                            '& .MuiSlider-rail': {
                                backgroundColor: '#00000050',
                                height: 2,
                            },
                        }}
                        valueLabelDisplay={'off'}
                        shiftStep={props.step}
                        step={props.step}
                        min={props.min}
                        max={props.max}
                        disabled={props.disabled}
                    />
                </div>
                <div className={'subtitle'}>
                    {props.subtileLabelVisible && (
                        <p className={'subtitle__label'}>
                            {Strings.PARAMETER_DETAIL_LABEL}
                        </p>
                    )}
                    {props.onChange !== null && (
                        <p className={'subtitle__value'}>
                            {props.onChange(value) + ' 倍'}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Parameter;

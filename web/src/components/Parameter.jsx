import React from 'react';
import Slider from '@mui/material/Slider';
import { useSliderStore } from '../stores/store';
import { toLocaleString } from '../core/util/stringFormat';
import * as Strings from '../constant/strings';
import '../styles/Parameter.css';

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
                <div className={'input'}>
                    <Slider
                        aria-label={props.name}
                        value={value}
                        onChange={(e, newValue) =>
                            setSliderValueByPromptType(props.type, newValue)
                        }
                        sx={{
                            // スライダーのピック
                            '& .MuiSlider-thumb': {
                                backgroundColor: '#00FFFF',
                                filter: `drop-shadow(0 0 9px #00C4FF) drop-shadow(0 0 8px rgba(0, 255, 229, 0.5))`,
                                backdropFilter: 'blur(6px)',
                                border: 'none',
                                width: 8,
                                height: 8,
                            },
                            // スライダーのバー
                            '& .MuiSlider-track': {
                                backgroundColor: '#00FFFF',
                                filter: `drop-shadow(0 0 9px #00C4FF) drop-shadow(0 0 8px rgba(0, 255, 229, 0.5))`,
                                backdropFilter: 'blur(6px)',
                                border: 'none',
                                height: 4,
                            },
                            // スライダーのレール(背景)
                            '& .MuiSlider-rail': {
                                backgroundColor: '#FFFFFF',
                                height: 4,
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
                <div className={'times__container'}>
                    {props.onChange !== null && (
                        <div>
                            <span className={'times-value'}>
                                {props.onChange(value)}
                            </span>
                            <span className={'times-value__unit'}>
                                {Strings.PARAMETER_TIMES_UNIT_LABEL}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Parameter;

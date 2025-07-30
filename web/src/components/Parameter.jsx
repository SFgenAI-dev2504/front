import React from 'react';
import Slider from '@mui/material/Slider';
import { useSliderStore } from '../stores/store';
import { toLocaleString } from '../core/util/stringFormat';
import * as Strings from '../constant/strings';
import * as Dimens from '../constant/dimens';
import '../styles/Parameter.css';
import {
    SLIDER_BG_FILTER,
    SLIDER_BORDER,
    SLIDER_FILTER,
    SLIDER_LINE_HEIGHT,
    SLIDER_PICK_WIDTH,
    SLIDER_RAIL_COLOR,
} from '../constant/dimens';

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
                                backgroundColor: Dimens.SLIDER_COLOR,
                                filter: Dimens.SLIDER_FILTER,
                                backdropFilter: Dimens.SLIDER_BG_FILTER,
                                width: Dimens.SLIDER_PICK_WIDTH,
                                height: Dimens.SLIDER_PICK_HEIGHT,
                                border: Dimens.SLIDER_BORDER,
                            },
                            // スライダーのバー
                            '& .MuiSlider-track': {
                                backgroundColor: Dimens.SLIDER_COLOR,
                                filter: Dimens.SLIDER_FILTER,
                                backdropFilter: Dimens.SLIDER_BG_FILTER,
                                height: Dimens.SLIDER_LINE_HEIGHT,
                                border: Dimens.SLIDER_BORDER,
                            },
                            // スライダーのレール(背景)
                            '& .MuiSlider-rail': {
                                backgroundColor: Dimens.SLIDER_RAIL_COLOR,
                                height: Dimens.SLIDER_LINE_HEIGHT,
                                border: Dimens.SLIDER_BORDER,
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

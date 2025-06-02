import React from 'react';
import '../styles/PlanetTypeSelection.css';
import { usePlanetTypeStore, useSliderStore } from '../stores/store';
import {
    planetTypeListItem,
    planetTypeNameListItem,
} from '../models/PlanetTypeListItem';

const PlanetTypeSelection = (props) => {
    const planetType = usePlanetTypeStore((state) => state.planetType);
    const setPlanetType = usePlanetTypeStore((state) => state.setPlanetType);
    const setSliderValueByPlanetType = useSliderStore(
        (state) => state.setSliderValueByPlanetType
    );
    return (
        <select
            className={'planet_type_selection'}
            value={planetType}
            onChange={(e) => {
                const input = e.target.value;
                setPlanetType(input);
                setSliderValueByPlanetType(input);
            }}
            disabled={props.disabled}
        >
            {planetTypeListItem.map((type, index) => (
                <option key={index} value={type}>
                    {planetTypeNameListItem[index]}
                </option>
            ))}
        </select>
    );
};

export default PlanetTypeSelection;

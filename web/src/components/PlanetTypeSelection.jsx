import React from 'react';
import {
    planetTypeListItem,
    planetTypeNameListItem,
} from '../models/PlanetTypeListItem';
import { usePlanetTypeStore, useSliderStore } from '../stores/store';
import '../styles/PlanetTypeSelection.css';

const PlanetTypeSelection = () => {
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

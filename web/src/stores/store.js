import { create } from 'zustand';
import * as Config from '../constant/config';

export const useSliderStore = create((set) => ({
    sliders: [
        Config.DIAMETER_DEFAULT,
        Config.MASS_DEFAULT,
        Config.AVERAGE_DISTANCE_FROM_THE_SUN_DEFAULT,
        Config.REVOLUTION_PERIOD_DEFAULT,
        Config.ROTATION_PERIOD_DEFAULT,
    ],
    setSliderValue: (index, value) =>
        set((state) => {
            const newSliders = [...state.sliders];
            newSliders[index] = value;
            return { sliders: newSliders };
        }),
}));

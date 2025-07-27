import React from 'react';
import { motion } from 'motion/react';
import FadeState from '../models/FadeState';
import { useFadeStateStore } from '../stores/store';
import * as Config from '../constant/config';

const START = 0;
const END = 1;

const FadeMotion = ({ isNormalOrder, children }) => {
    const fadeState = useFadeStateStore((state) => state.value);
    const fadeInOpacitiesByOrder = isNormalOrder ? [START, END] : [END, START];
    const fadeOutOpacitiesByOrder = isNormalOrder ? [END, START] : [START, END];

    return (
        <section className={'fade-motion'}>
            {fadeState === FadeState.NO_FADE && <>{children}</>}
            {fadeState === FadeState.FADE_IN && (
                <motion.div
                    initial={{ opacity: fadeInOpacitiesByOrder[START] }}
                    animate={{ opacity: fadeInOpacitiesByOrder[END] }}
                    transition={{ duration: Config.DURATION_S }}
                >
                    {children}
                </motion.div>
            )}
            {fadeState === FadeState.FADE_OUT && (
                <motion.div
                    initial={{ opacity: fadeOutOpacitiesByOrder[START] }}
                    animate={{ opacity: fadeOutOpacitiesByOrder[END] }}
                    transition={{ duration: Config.DURATION_S }}
                >
                    {children}
                </motion.div>
            )}
        </section>
    );
};

export default FadeMotion;

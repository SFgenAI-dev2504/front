import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Button, Spacer } from '../components/index';
import { warn } from '../core/notify/notify';
import * as Strings from '../constant/strings';
import * as Config from '../constant/config';
import HomeLogoImage from '../assets/images/home_logo.svg';
import '../styles/Home.css';

const Home = () => {
    const navigate = useNavigate();

    const toGenerate = () => {
        navigate(Strings.GENERATOR_URL);
    };

    const toGallery = () => {
        warn(Strings.COMING_SOON);
    };

    return (
        <motion.div
            className={'home'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: Config.SCREEN_TRANSITION_DURATION_S }}
        >
            <div className={'home__container'}>
                <p className={'sub_label'}>{Strings.HOME_SUB_LABEL}</p>
                <Spacer height={24} />
                <p className={'space_label'}>{Strings.HOME_LABEL_SPACE}</p>
                <p className={'ai_label'}>{Strings.HOME_LABEL_AI}</p>
                <p className={'maker_label'}>{Strings.HOME_LABEL_MAKER}</p>
                <Spacer height={24} />
                <Button
                    className={'primary__m'}
                    name={Strings.TO_GENERATOR_BUTTON}
                    disabled={false}
                    disabledName={Strings.TO_GENERATOR_BUTTON}
                    onClick={() => toGenerate()}
                />
                <Spacer height={24} />
                <Button
                    className={'transparent__m'}
                    name={Strings.TO_GALLERY_BUTTON}
                    disabled={false}
                    disabledName={Strings.TO_GALLERY_BUTTON}
                    onClick={() => toGallery()}
                />
            </div>
            <img className={'home__logo'} src={HomeLogoImage} alt={''} />
        </motion.div>
    );
};

export default Home;

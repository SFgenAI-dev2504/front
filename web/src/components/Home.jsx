import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Spacer } from '../components/index';
import '../styles/Home.css';
import * as Strings from '../constant/strings';
import HomeBKImage from '../assets/images/home_background.png';
import HomeLogoImage from '../assets/images/home_logo.svg';
import { warn } from '../core/notify/notify';

const Home = () => {
    const navigate = useNavigate();

    const toGenerate = () => {
        navigate(Strings.GENERATOR_URL);
    };

    const toGallery = () => {
        warn(Strings.COMING_SOON);
    };

    return (
        <section className={'home'}>
            <img className={'home__bk'} src={HomeBKImage} alt={''} />
            <div className={'home__container'}>
                <p className={'sub_label'}>{Strings.HOME_SUB_LABEL}</p>
                <Spacer height={24} />
                <p className={'space_label'}>{Strings.HOME_LABEL_SPACE}</p>
                <p className={'ai_label'}>{Strings.HOME_LABEL_AI}</p>
                <p className={'maker_label'}>{Strings.HOME_LABEL_MAKER}</p>
                <Spacer height={24} />
                <Button
                    className={'button--primary'}
                    name={Strings.TO_GENERATOR_BUTTON}
                    width={288}
                    disabled={false}
                    disabledName={Strings.TO_GENERATOR_BUTTON}
                    onClick={() => toGenerate()}
                />
                <Spacer height={24} />
                <Button
                    className={'button--transparent'}
                    name={Strings.TO_GALLERY_BUTTON}
                    width={288}
                    disabled={false}
                    disabledName={Strings.TO_GALLERY_BUTTON}
                    onClick={() => toGallery()}
                />
            </div>
            <img className={'home__logo'} src={HomeLogoImage} alt={''} />
        </section>
    );
};

export default Home;

import React from 'react';
import '../styles/ParameterText.css';
import { usePlanetNameStore } from '../stores/store';
import * as Strings from '../constant/strings';

const ParameterText = (props) => {
    const planetName = usePlanetNameStore((state) => state.planetName);
    const setPlanetName = usePlanetNameStore((state) => state.setPlanetName);

    const replacePlanetName = (name) => {
        return (
            name
                // Unicode正規化
                .normalize('NFKD')
                // 禁止・危険文字を全て「_」に変換
                .replace(/[\\/:*?"<>|'\s#%&;=~^$@`]/g, '_')
                // 先頭のドットを削除
                .replace(/^\.+/, '')
                // 末尾のドットを削除
                .replace(/\.+$/, '')
                // 連続した_を1つに
                .replace(/_+/g, '_')
        );
    };

    return (
        <section className={'parameter__text'}>
            <p className={'name'}>{props.name}</p>
            <input
                className={'planet__name'}
                name={'input'}
                type={'text'}
                autoComplete={'off'}
                value={planetName}
                disabled={props.disabled}
                onChange={(e) => {
                    setPlanetName(replacePlanetName(e.target.value));
                }}
            />
            <p className={'suffix'}>{Strings.PLANET_NAME_SUFFIX}</p>
        </section>
    );
};

export default ParameterText;

import React from 'react';
import { default as ReactModel } from 'react-modal';
import { Button, Spacer } from './index';
import * as Strings from '../constant/strings';
import * as Config from '../constant/config';
import '../styles/Modal.css';

ReactModel.setAppElement('#root');

const Modal = (props) => {
    return (
        <ReactModel
            isOpen={props.isOpen}
            onRequestClose={props.onClose}
            contentLabel={'Content Modal'}
            overlayClassName={{
                base: 'overlay',
                afterOpen: 'overlay-after',
                beforeClose: 'overlay-before',
            }}
            className={{
                base: 'modal',
                afterOpen: 'modal-after',
                beforeClose: 'modal-before',
            }}
            closeTimeoutMS={Config.MODAL_CLOSE_DURATION_MS}
        >
            <p className={'modal__content'}>{props.content}</p>
            <Spacer height={40} />
            <Button
                className={'modal__button'}
                name={Strings.CLOSE_BUTTON}
                disabled={false}
                disabledName={Strings.CLOSE_BUTTON}
                onClick={props.onClose}
            />
        </ReactModel>
    );
};

export default Modal;

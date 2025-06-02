import * as Dimens from '../../constant/dimens';
import { toast } from 'react-toastify';

export const success = (message) => {
    toast.info(message, Dimens.TOAST_OPTION);
};

export const warn = (message) => {
    toast.warn(message, Dimens.TOAST_OPTION);
};

export const error = (message) => {
    toast.error(message, Dimens.TOAST_OPTION);
};

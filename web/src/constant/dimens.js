// Loader
import { Bounce } from 'react-toastify';

export const LOADER_COLOR = '#00aac9';

// Toast
export const TOAST_OPTION = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    transition: Bounce,
};

export const TOAST_ERROR_OPTION = {
    position: 'top-right',
    autoClose: 600000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    transition: Bounce,
};

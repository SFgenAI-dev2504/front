import { Bounce } from 'react-toastify';

// Loader
export const LOADER_COLOR = '#00FFFF';

// Toast
export const TOAST_OPTION = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    transition: Bounce,
};

export const TOAST_ERROR_OPTION = {
    position: 'top-right',
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    transition: Bounce,
};

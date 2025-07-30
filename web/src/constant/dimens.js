import { Bounce } from 'react-toastify';

// Loader
export const LOADER_COLOR = '#00FFFF';

// Slider
export const SLIDER_COLOR = '#00FFFF';
export const SLIDER_RAIL_COLOR = '#FFFFFF';
export const SLIDER_PICK_WIDTH = 8;
export const SLIDER_PICK_HEIGHT = 8;
export const SLIDER_LINE_HEIGHT = 4;
export const SLIDER_FILTER =
    'drop-shadow(0 0 9px #00C4FF) drop-shadow(0 0 8px rgba(0, 255, 229, 0.5))';
export const SLIDER_BG_FILTER = 'blur(6px)';
export const SLIDER_BORDER = 'none';

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

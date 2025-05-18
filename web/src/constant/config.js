// API Endpoint
export const BASE_URL = 'http://localhost:5000';
export const GENERATE_API_URL = `${BASE_URL}/generate`;

// API Header
export const COMMON_HEADER = {
    'Content-Type': 'application/json',
};

// Slider min value
export const DIAMETER_MIN = 0;
export const MASS_MIN = 0;
export const AVERAGE_DISTANCE_FROM_THE_SUN_MIN = 0;
export const REVOLUTION_PERIOD_MIN = 0;
export const ROTATION_PERIOD_MIN = 0;

// Slider max value
export const DIAMETER_MAX = 100;
export const MASS_MAX = 200;
export const AVERAGE_DISTANCE_FROM_THE_SUN_MAX = 200;
export const REVOLUTION_PERIOD_MAX = 10;
export const ROTATION_PERIOD_MAX = 10000;

// Slider step value
export const DIAMETER_STEP = 10;
export const MASS_STEP = 10;
export const AVERAGE_DISTANCE_FROM_THE_SUN_STEP = 10;
export const REVOLUTION_PERIOD_STEP = 1;
export const ROTATION_PERIOD_STEP = 1000;

// Slider default value
export const DIAMETER_DEFAULT = 20;
export const MASS_DEFAULT = 100;
export const AVERAGE_DISTANCE_FROM_THE_SUN_DEFAULT = 10;
export const REVOLUTION_PERIOD_DEFAULT = 1;
export const ROTATION_PERIOD_DEFAULT = 100;

// Chart
export const CHART_MIN = 0;
export const CHART_MAX = 100;
export const CHART_STEP_SIZE = 20;
export const CHART_BACKDROP_COLOR = 'transparent';
export const BASE_COLOR = '#000000';
export const POINT_LABELS_FONT_SIZE = 12;

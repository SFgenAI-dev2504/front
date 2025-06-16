// API Endpoint
export const BASE_URL = 'http://localhost:5000';
export const GENERATE_API_URL = `${BASE_URL}/generate`;

// API Header
export const COMMON_HEADER = {
    'Content-Type': 'application/json',
};

// Slider min value
export const DIAMETER_MIN = 1000;
export const GRAVITY_MIN = 0;
export const DISTANCE_FROM_SUN_MIN = 50;
export const AVERAGE_SURFACE_TEMPERATURE_MIN = -200;
export const ATMOSPHERIC_DENSITY_MIN = 0;
export const WATER_AMOUNT_MIN = 0;
export const SURFACE_UNEVENNESS_MIN = 0;
export const VOLCANIC_ACTIVITY_MIN = 0;
export const AURORA_MIN = 0;

// Slider max value
export const DIAMETER_MAX = 200000;
export const GRAVITY_MAX = 5;
export const DISTANCE_FROM_SUN_MAX = 5000;
export const AVERAGE_SURFACE_TEMPERATURE_MAX = 500;
export const ATMOSPHERIC_DENSITY_MAX = 100;
export const WATER_AMOUNT_MAX = 100;
export const SURFACE_UNEVENNESS_MAX = 100;
export const VOLCANIC_ACTIVITY_MAX = 100;
export const AURORA_MAX = 100;

// Slider step value
export const DIAMETER_STEP = 1;
export const GRAVITY_STEP = 0.01;
export const DISTANCE_FROM_SUN_STEP = 1;
export const AVERAGE_SURFACE_TEMPERATURE_STEP = 1;
export const ATMOSPHERIC_DENSITY_STEP = 1;
export const WATER_AMOUNT_STEP = 1;
export const SURFACE_UNEVENNESS_STEP = 1;
export const VOLCANIC_ACTIVITY_STEP = 1;
export const AURORA_STEP = 1;

// Slider Mercury default value
export const MERCURY_DIAMETER_VALUE = 4879;
export const MERCURY_GRAVITY_VALUE = 0.38;
export const MERCURY_DISTANCE_FROM_SUN_VALUE = 58;
export const MERCURY_AVERAGE_SURFACE_TEMPERATURE_VALUE = 167;
export const MERCURY_ATMOSPHERIC_DENSITY_VALUE = 5;
export const MERCURY_WATER_AMOUNT_VALUE = 0;
export const MERCURY_SURFACE_UNEVENNESS_VALUE = 80;
export const MERCURY_VOLCANIC_ACTIVITY_VALUE = 10;
export const MERCURY_AURORA_VALUE = 0;

// Slider Venus default value
export const VENUS_DIAMETER_VALUE = 12104;
export const VENUS_GRAVITY_VALUE = 0.91;
export const VENUS_DISTANCE_FROM_SUN_VALUE = 108;
export const VENUS_AVERAGE_SURFACE_TEMPERATURE_VALUE = 464;
export const VENUS_ATMOSPHERIC_DENSITY_VALUE = 100;
export const VENUS_WATER_AMOUNT_VALUE = 0;
export const VENUS_SURFACE_UNEVENNESS_VALUE = 40;
export const VENUS_VOLCANIC_ACTIVITY_VALUE = 90;
export const VENUS_AURORA_VALUE = 0;

// Slider Earth default value
export const EARTH_DIAMETER_VALUE = 12742;
export const EARTH_GRAVITY_VALUE = 1.0;
export const EARTH_DISTANCE_FROM_SUN_VALUE = 150;
export const EARTH_AVERAGE_SURFACE_TEMPERATURE_VALUE = 15;
export const EARTH_ATMOSPHERIC_DENSITY_VALUE = 90;
export const EARTH_WATER_AMOUNT_VALUE = 80;
export const EARTH_SURFACE_UNEVENNESS_VALUE = 50;
export const EARTH_VOLCANIC_ACTIVITY_VALUE = 60;
export const EARTH_AURORA_VALUE = 50;

// Slider Mars default value
export const MARS_DIAMETER_VALUE = 6779;
export const MARS_GRAVITY_VALUE = 0.38;
export const MARS_DISTANCE_FROM_SUN_VALUE = 228;
export const MARS_AVERAGE_SURFACE_TEMPERATURE_VALUE = -65;
export const MARS_ATMOSPHERIC_DENSITY_VALUE = 10;
export const MARS_WATER_AMOUNT_VALUE = 5;
export const MARS_SURFACE_UNEVENNESS_VALUE = 85;
export const MARS_VOLCANIC_ACTIVITY_VALUE = 70;
export const MARS_AURORA_VALUE = 10;

// Slider Jupiter default value
export const JUPITER_DIAMETER_VALUE = 139820;
export const JUPITER_GRAVITY_VALUE = 2.53;
export const JUPITER_DISTANCE_FROM_SUN_VALUE = 778;
export const JUPITER_AVERAGE_SURFACE_TEMPERATURE_VALUE = -110;
export const JUPITER_ATMOSPHERIC_DENSITY_VALUE = 100;
export const JUPITER_WATER_AMOUNT_VALUE = 0;
export const JUPITER_SURFACE_UNEVENNESS_VALUE = 40;
export const JUPITER_VOLCANIC_ACTIVITY_VALUE = 0;
export const JUPITER_AURORA_VALUE = 100;

// Slider Saturn default value
export const SATURN_DIAMETER_VALUE = 116460;
export const SATURN_GRAVITY_VALUE = 1.07;
export const SATURN_DISTANCE_FROM_SUN_VALUE = 1427;
export const SATURN_AVERAGE_SURFACE_TEMPERATURE_VALUE = -140;
export const SATURN_ATMOSPHERIC_DENSITY_VALUE = 90;
export const SATURN_WATER_AMOUNT_VALUE = 0;
export const SATURN_SURFACE_UNEVENNESS_VALUE = 40;
export const SATURN_VOLCANIC_ACTIVITY_VALUE = 0;
export const SATURN_AURORA_VALUE = 90;

// Slider Uranus default value
export const URANUS_DIAMETER_VALUE = 50724;
export const URANUS_GRAVITY_VALUE = 0.89;
export const URANUS_DISTANCE_FROM_SUN_VALUE = 2871;
export const URANUS_AVERAGE_SURFACE_TEMPERATURE_VALUE = -195;
export const URANUS_ATMOSPHERIC_DENSITY_VALUE = 70;
export const URANUS_WATER_AMOUNT_VALUE = 0;
export const URANUS_SURFACE_UNEVENNESS_VALUE = 30;
export const URANUS_VOLCANIC_ACTIVITY_VALUE = 0;
export const URANUS_AURORA_VALUE = 100;

// Slider Neptune default value
export const NEPTUNE_DIAMETER_VALUE = 49244;
export const NEPTUNE_GRAVITY_VALUE = 1.14;
export const NEPTUNE_DISTANCE_FROM_SUN_VALUE = 4495;
export const NEPTUNE_AVERAGE_SURFACE_TEMPERATURE_VALUE = -200;
export const NEPTUNE_ATMOSPHERIC_DENSITY_VALUE = 80;
export const NEPTUNE_WATER_AMOUNT_VALUE = 0;
export const NEPTUNE_SURFACE_UNEVENNESS_VALUE = 40;
export const NEPTUNE_VOLCANIC_ACTIVITY_VALUE = 0;
export const NEPTUNE_AURORA_VALUE = 100;

// Chart
export const CHART_MIN = 0;
export const CHART_MAX = 100;
export const CHART_STEP_SIZE = 20;
export const CHART_BACKDROP_COLOR = 'transparent';
export const BASE_COLOR = '#000000';
export const POINT_LABELS_FONT_SIZE = 12;

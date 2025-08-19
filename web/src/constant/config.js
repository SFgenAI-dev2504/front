// API Endpoint
export const BASE_URL = 'http://localhost:5000';
export const GENERATE_API_URL = `${BASE_URL}/generate`;
export const DECIDE_API_URL = `${BASE_URL}/decide`;

// API Header
export const COMMON_HEADER = {
    'Content-Type': 'application/json',
};

// Slider min value
export const DIAMETER_MIN = 1000;
export const GRAVITY_MIN = 0;
export const DISTANCE_MIN = 50;
export const TEMPERATURE_MIN = -200;
export const ATMOSPHERE_MIN = 0;
export const WATER_MIN = 0;
export const TERRAIN_MIN = 0;
export const VOLCANO_MIN = 0;
export const AURORA_MIN = 0;

// Slider max value
export const DIAMETER_MAX = 200000;
export const GRAVITY_MAX = 5;
export const DISTANCE_MAX = 5000;
export const TEMPERATURE_MAX = 500;
export const ATMOSPHERE_MAX = 100;
export const WATER_MAX = 100;
export const TERRAIN_MAX = 100;
export const VOLCANO_MAX = 100;
export const AURORA_MAX = 100;

// Slider step value
export const DIAMETER_STEP = 1;
export const GRAVITY_STEP = 0.01;
export const DISTANCE_STEP = 1;
export const TEMPERATURE_STEP = 1;
export const ATMOSPHERE_STEP = 1;
export const WATER_STEP = 1;
export const TERRAIN_STEP = 1;
export const VOLCANO_STEP = 1;
export const AURORA_STEP = 1;

// Slider Mercury default value
export const MERCURY_DIAMETER_VALUE = 4879;
export const MERCURY_GRAVITY_VALUE = 0.38;
export const MERCURY_DISTANCE_VALUE = 58;
export const MERCURY_TEMPERATURE_VALUE = 167;
export const MERCURY_ATMOSPHERE_VALUE = 5;
export const MERCURY_WATER_VALUE = 0;
export const MERCURY_TERRAIN_VALUE = 80;
export const MERCURY_VOLCANO_VALUE = 10;
export const MERCURY_AURORA_VALUE = 0;

// Slider Venus default value
export const VENUS_DIAMETER_VALUE = 12104;
export const VENUS_GRAVITY_VALUE = 0.91;
export const VENUS_DISTANCE_VALUE = 108;
export const VENUS_TEMPERATURE_VALUE = 464;
export const VENUS_ATMOSPHERE_VALUE = 100;
export const VENUS_WATER_VALUE = 0;
export const VENUS_TERRAIN_VALUE = 40;
export const VENUS_VOLCANO_VALUE = 90;
export const VENUS_AURORA_VALUE = 0;

// Slider Earth default value
export const EARTH_DIAMETER_VALUE = 12742;
export const EARTH_GRAVITY_VALUE = 1.0;
export const EARTH_DISTANCE_VALUE = 150;
export const EARTH_TEMPERATURE_VALUE = 15;
export const EARTH_ATMOSPHERE_VALUE = 90;
export const EARTH_WATER_VALUE = 80;
export const EARTH_TERRAIN_VALUE = 50;
export const EARTH_VOLCANO_VALUE = 60;
export const EARTH_AURORA_VALUE = 50;

// Slider Mars default value
export const MARS_DIAMETER_VALUE = 6779;
export const MARS_GRAVITY_VALUE = 0.38;
export const MARS_DISTANCE_VALUE = 228;
export const MARS_TEMPERATURE_VALUE = -65;
export const MARS_ATMOSPHERE_VALUE = 10;
export const MARS_WATER_VALUE = 5;
export const MARS_TERRAIN_VALUE = 85;
export const MARS_VOLCANO_VALUE = 70;
export const MARS_AURORA_VALUE = 10;

// Slider Jupiter default value
export const JUPITER_DIAMETER_VALUE = 139820;
export const JUPITER_GRAVITY_VALUE = 2.53;
export const JUPITER_DISTANCE_VALUE = 778;
export const JUPITER_TEMPERATURE_VALUE = -110;
export const JUPITER_ATMOSPHERE_VALUE = 100;
export const JUPITER_WATER_VALUE = 0;
export const JUPITER_TERRAIN_VALUE = 40;
export const JUPITER_VOLCANO_VALUE = 0;
export const JUPITER_AURORA_VALUE = 100;

// Slider Saturn default value
export const SATURN_DIAMETER_VALUE = 116460;
export const SATURN_GRAVITY_VALUE = 1.07;
export const SATURN_DISTANCE_VALUE = 1427;
export const SATURN_TEMPERATURE_VALUE = -140;
export const SATURN_ATMOSPHERE_VALUE = 90;
export const SATURN_WATER_VALUE = 0;
export const SATURN_TERRAIN_VALUE = 40;
export const SATURN_VOLCANO_VALUE = 0;
export const SATURN_AURORA_VALUE = 90;

// Slider Uranus default value
export const URANUS_DIAMETER_VALUE = 50724;
export const URANUS_GRAVITY_VALUE = 0.89;
export const URANUS_DISTANCE_VALUE = 2871;
export const URANUS_TEMPERATURE_VALUE = -195;
export const URANUS_ATMOSPHERE_VALUE = 70;
export const URANUS_WATER_VALUE = 0;
export const URANUS_TERRAIN_VALUE = 30;
export const URANUS_VOLCANO_VALUE = 0;
export const URANUS_AURORA_VALUE = 100;

// Slider Neptune default value
export const NEPTUNE_DIAMETER_VALUE = 49244;
export const NEPTUNE_GRAVITY_VALUE = 1.14;
export const NEPTUNE_DISTANCE_VALUE = 4495;
export const NEPTUNE_TEMPERATURE_VALUE = -200;
export const NEPTUNE_ATMOSPHERE_VALUE = 80;
export const NEPTUNE_WATER_VALUE = 0;
export const NEPTUNE_TERRAIN_VALUE = 40;
export const NEPTUNE_VOLCANO_VALUE = 0;
export const NEPTUNE_AURORA_VALUE = 100;

// Length Validation
export const MIN_LENGTH = 1;
export const MAX_LENGTH = 6;

// Explanation Length
export const EXPLANATION_MAX_LENGTH = 100;

// Duration
export const DURATION_MS = 750;
export const DURATION_S = DURATION_MS / 1000;
export const SCREEN_TRANSITION_DURATION_S = 0.5;
export const MODAL_CLOSE_DURATION_MS = 300;

// Transform
export const TRANSFORM_SLIDER_FADE_IN_Y = [120, 0];
export const TRANSFORM_SLIDER_FADE_OUT_Y = [0, 120];
export const TRANSFORM_EXPLANATION_FADE_IN_Y = [-180, 0];
export const TRANSFORM_EXPLANATION_FADE_OUT_Y = [0, -180];

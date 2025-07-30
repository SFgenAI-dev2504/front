import axios from 'axios';
import * as Strings from '../constant/strings';
import * as Config from '../constant/config';

export const generate = async (sliderValue, planetName) => {
    const payload = {
        ...sliderValue,
        planetName: `${planetName}${Strings.PLANET_NAME_KANA_SUFFIX}`,
    };

    return await axios
        .post(`${Config.GENERATE_API_URL}`, payload, {
            headers: Config.COMMON_HEADER,
        })
        .then((response) => {
            const body = response.data;
            console.log(body);
            return {
                ...body,
                status: response.status,
            };
        })
        .catch((e) => {
            const body = e.response.data;
            console.log(body);
            // タイムアウトの場合
            if (e.code === 'ECONNABORTED') {
                return {
                    ...body,
                    status: 504,
                };
            } else {
                return {
                    ...body,
                    status: e.response.status,
                };
            }
        });
};

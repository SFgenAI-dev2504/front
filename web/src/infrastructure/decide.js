import axios from 'axios';
import * as Config from '../constant/config';

export const decide = async (imageId) => {
    const payload = {
        imageId: imageId,
    };
    return await axios
        .post(`${Config.DECIDE_API_URL}`, payload, {
            headers: Config.COMMON_HEADER,
        })
        .then((response) => {
            const body = response.data;
            console.log(body);
            return { ...body, status: response.status };
        })
        .catch((e) => {
            const body = e.response.data;
            console.log(body);
            // タイムアウトの場合
            if (e.code === 'ECONNABORTED') {
                return { ...body, status: 504 };
            } else {
                return {
                    ...body,
                    status: e.response.status,
                };
            }
        });
};

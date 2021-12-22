import axios, { AxiosPromise } from 'axios';

import { HourlyForecastResponse } from '../utils/models/hourly-forecast-response';

const apiKey = '828e2c4915547cba5b8e0d8ccc3ffac5';

const getForecast = (city: string): AxiosPromise<HourlyForecastResponse> => {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast', {
        params: {
            q: city,
            appid: apiKey
        },
    });
}

export const weatherApi = {
    getForecast,
};
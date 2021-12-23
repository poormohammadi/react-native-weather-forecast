import axios, { AxiosPromise } from 'axios';

import { CityLocationResponse } from '../utils/models/city-location-response';
import { DailyForecastResponse } from '../utils/models/daily-forecast-response';

const apiKey = '828e2c4915547cba5b8e0d8ccc3ffac5';

// The best way to implement this is using Hourly Forecast, 4-day API format (https://openweathermap.org/api/hourly-forecast)
// But it's not free so I had to implement multiple functions to get the 
// geographical coordinates of the city and then get its 7-day weather forecast

const getForecast = async (city: string): Promise<DailyForecastResponse> => {
    return new Promise((resolve, reject) => {
        searchCity(city)
            .then(res => {
                if (!res.data.length) {
                    reject({ message: 'No city found' });
                }

                getForecastByCoordinates(res.data[0].lat, res.data[0].lon)
                    .then(res => {
                        resolve(res.data);
                    })
                    .catch(err => {
                        reject(err);
                    });
            })
            .catch(err => {
                reject(err);
            });
    });
}

const searchCity = (city: string): AxiosPromise<CityLocationResponse> => {
    return axios.get(`https://api.openweathermap.org/geo/1.0/direct`, {
        params: {
            q: city,
            limit: 1,
            appid: apiKey,
            units: 'metric'
        },
    });
}

const getForecastByCoordinates = (lat: number, lon: number): AxiosPromise<DailyForecastResponse> => {
    return axios.get(`https://api.openweathermap.org/data/2.5/onecall`, {
        params: {
            lat,
            lon,
            exclude: 'current,minutely,hourly,alerts',
            appid: apiKey,
            units: 'metric'
        },
    });
}

export const weatherApi = {
    getForecast,
};
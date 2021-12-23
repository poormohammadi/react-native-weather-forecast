import { Dispatch } from 'react';

import { DailyData } from '../../utils/models/daily-data';
import { AppState } from './..';
import { weatherApi } from './../../api/weather';
import { WeatherActionsTypes } from './types';

export function setCity(value: string) {
    return {
        type: WeatherActionsTypes.SetCity,
        payload: value,
    };
}

export function setError(value: string) {
    return {
        type: WeatherActionsTypes.SetError,
        payload: value,
    };
}

export function setForecast(value: DailyData[]) {
    return {
        type: WeatherActionsTypes.SetForecast,
        payload: value,
    };
}

export function getForecast() {
    return {
        type: WeatherActionsTypes.GetForecast,
    };
}

export function updateForecast() {
    return (dispatch: Dispatch<any>, getState: () => AppState) => {
        const city = getState().weather.city;
        if (city) {
            dispatch(getForecast());

            weatherApi.getForecast(city)
                .then(res => {
                    dispatch(setForecast(res.daily));
                })
                .catch(err => {
                    dispatch(setError(err.message));
                });
        } else {

        }
    }
}



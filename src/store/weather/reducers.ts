import { WeatherActions, WeatherState, WeatherActionsTypes } from './types';

export const initialState: WeatherState = {
    isLoadingForecast: false,
}

export function weatherReducer(state = initialState, action: WeatherActions): WeatherState {

    switch (action.type) {
        case WeatherActionsTypes.SetCity:
            return {
                ...state,
                city: action.payload,
            }
        case WeatherActionsTypes.SetError:
            return {
                ...state,
                error: action.payload,
                isLoadingForecast: false,
            }
        case WeatherActionsTypes.SetForecast:
            return {
                ...state,
                error: '',
                forecast: action.payload,
                isLoadingForecast: false,
            }
        case WeatherActionsTypes.GetForecast:
            return {
                ...state,
                error: '',
                isLoadingForecast: true,
                forecast: [],
            }
    }

    return state;
}
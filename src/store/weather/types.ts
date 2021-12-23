import { DailyData } from '../../utils/models/daily-data';

export interface WeatherState {
    isLoadingForecast: boolean;
    city?: string;
    forecast?: DailyData[];
    error?: string;
}

export enum WeatherActionsTypes {
    SetCity = 'Set City',
    SetForecast = 'Set Forecast',
    GetForecast = 'Get Forecast',
    SetError = 'Set Error',
}

interface SetCityAction {
    type: WeatherActionsTypes.SetCity;
    payload: string;
}

interface SetForecastAction {
    type: WeatherActionsTypes.SetForecast;
    payload: DailyData[];
}

interface GetForecastAction {
    type: WeatherActionsTypes.GetForecast;
}

interface SetErrorAction {
    type: WeatherActionsTypes.SetError;
    payload: string;
}

export type WeatherActions = SetCityAction | SetForecastAction | SetErrorAction | GetForecastAction;



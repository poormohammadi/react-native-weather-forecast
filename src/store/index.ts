import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { weatherReducer } from './weather/reducers';
import { WeatherState } from './weather/types';

export interface AppState {
    weather: WeatherState;
}

const rootReducer = combineReducers({
    weather: weatherReducer,
});

export function configureStore() {
    const middleware: any[] = [thunk];
    if (__DEV__) {
        middleware.push(logger);
    }

    const store = createStore(rootReducer,
        applyMiddleware(...middleware),
    );

    return store;
}
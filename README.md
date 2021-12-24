# Weather Forecast
## Introduction 
This is a a React Native application source code which shows 7-day weather forecast given the city name.
- [Open Weather Map Api](https://openweathermap.org/api/one-call-api) is used to fetch the data
- It shows a spinner when data is loading
- It shows an error when a network error is occurring
- Weather icons are lazy loaded.
- It works in both portrait and landscape modes

## Technical notes
- The best way to implement this is using Hourly Forecast, 4-day API format (https://openweathermap.org/api/hourly-forecast) , but it's not free so multiple functions are implemented to get the geographical coordinates of the city and then get its 7-day weather forecast. (https://openweathermap.org/api/one-call-api) 

- The project is in `typescript`
- `react-navigatoin` is used for navigation.
- `axios` is used for http calls.
- `redux` is used for state management. `redux-thunk` added to handle async actions.
- [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) is used as the image viewer. It helps with caching images and performance issues.

## How to run
Follow [the instructions here](https://reactnative.dev/docs/environment-setup) to setup the environment. Then run the commands below.

`git clone https://github.com/poormohammadi/react-native-weather-forecast.git`

`cd react-native-weather-forecast`

`npm install`

### iOS
`npx pod-install`

Now run `npm run ios` to run on simulator and open xcode to build and run on a real iOS device.

### Android
Run `npm run android` to run on the connected device. It could be an emulator or a real device.

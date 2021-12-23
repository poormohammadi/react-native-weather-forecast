import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import SearchBox from '../components/SearchBox';
import WeatherDailyCard from '../components/WeatherDailyCard';
import { AppState } from '../store';
import { setCity, updateForecast } from '../store/weather/actions';
import { DailyData } from '../utils/models/daily-data';

type Props = {
    city?: string;
    isLoadingForecast?: boolean;
    error?: string;
    forecast?: DailyData[];
    setCity: typeof setCity;
    updateForecast: typeof updateForecast;
}

function Home(props: Props) {
    const {
        city,
        forecast,
        isLoadingForecast,
        error,
        setCity,
        updateForecast,
    } = props;

    return (
        <View>
            <SearchBox
                value={city}
                onChange={setCity}
                onSubmit={updateForecast}
            />

            {isLoadingForecast && <ActivityIndicator />}

            {!!error && <Text style={styles.error}>{error}</Text>}

            <FlatList
                contentContainerStyle={styles.listStyle}
                keyboardShouldPersistTaps="handled"
                data={forecast}
                renderItem={({ item }) => (
                    <WeatherDailyCard
                        main={item.weather[0].main}
                        description={item.weather[0].description}
                        date={item.dt}
                        icon={item.weather[0].icon}
                    />
                )}
                keyExtractor={(item, index) => item.dt.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        textAlign: 'center',
    },
    listStyle: { paddingBottom: 80 },
})

const mapStateToProps = (state: AppState) => ({
    city: state.weather.city,
    forecast: state.weather.forecast,
    isLoadingForecast: state.weather.isLoadingForecast,
    error: state.weather.error,
});

const mapDispatchToProps = (dispatch: any) => ({
    updateForecast: () => dispatch(updateForecast()),
    setCity: (e: string) => dispatch(setCity(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
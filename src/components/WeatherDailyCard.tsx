import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { date } from '../utils/date';
import LazyImage from './LazyImage';

type Props = {
    date: number,
    main: string;
    description: string;
    icon: string;
}

export default function WeatherDailyCard(props: Props) {
    return (
        <View>
            <View style={styles.date}>
                <Text>
                    {date.shortDate(props.date)}
                </Text>
            </View>
            <View style={styles.dataContainer}>
                <View>
                    <Text style={styles.mainText}>
                        {props.main}
                    </Text>
                    <Text style={styles.descriptionText}>
                        {props.description}
                    </Text>
                </View>

                <LazyImage
                    width={50}
                    height={50}
                    source={{ uri: `https://openweathermap.org/img/w/${props.icon}.png` }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    date: {
        backgroundColor: 'lightgrey',
        color: 'black',
        paddingLeft: 10,
        paddingVertical: 5,
    },
    dataContainer: {
        padding: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mainText: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    descriptionText: {
        marginTop: 5,
    }
});

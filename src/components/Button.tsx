import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & { title: string };

export default function Button(props: Props) {
    return (
        <TouchableOpacity
            {...props}
            style={styles.button}
        >
            <Text style={[
                styles.text,
                props.disabled && { ...styles.disabledText },
            ]}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        height: 30,
        margin: 5,
        justifyContent: 'center',
    },
    disabledText: {
        opacity: .3,
    },
    text: {
        color: 'blue',
    }
});


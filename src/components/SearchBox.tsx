import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

type Props = {
    value?: string;
    onChange: (e: string) => void;
    onSubmit: () => void;
}

export default function SearchBox(props: Props) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={props.value}
                onChangeText={props.onChange}
                placeholder="Enter city name:"
            />
            <Button
                disabled={!props.value}
                title="Search"
                onPress={props.onSubmit}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'grey',
        paddingLeft: 10,
    }
});

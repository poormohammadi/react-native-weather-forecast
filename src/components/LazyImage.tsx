import React, { useRef, useState } from 'react';
import { ActivityIndicator, Animated, StyleSheet, View } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';

type Props = FastImageProps & {
    height: number;
    width: number;
};

export default function LazyImage(props: Props) {

    const [isLoading, setIsloading] = useState(true);

    const imageOpacity = useRef(new Animated.Value(0)).current;

    const fadeInImage = () => {
        Animated.timing(imageOpacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    const onLoad = () => {
        setIsloading(false);
        fadeInImage();
    }

    const { width, height } = props;
    return (
        <View style={[styles.container, { width, height }]}>
            <View style={styles.spinnerContainer}>
                {isLoading && <ActivityIndicator />}
            </View>
            <Animated.View style={{ opacity: imageOpacity }}>
                <FastImage {...props} style={{ width, height }} onLoad={onLoad} />
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    spinnerContainer: { position: 'absolute' },
})

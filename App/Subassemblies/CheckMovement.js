import React, { Component } from 'react';
import {
    Image,
    Text,
    StyleSheet,
    Dimensions,
    View,
    TouchableHighlight,
    Alert
} from 'react-native';
import {decorator as sensors} from 'react-native-sensors';

var sWidth = Dimensions.get('window').width;
var sLength = Dimensions.get('window').height;

/**
 * THIS CLASS IS CURRENTLY IN PROGRESS AND HAS NOT YET BEEN FULLY IMPLEMENTED
 */

/*
    This class will function within the "inTranse" screen.
    FUNCTION: Check if the phone is being moved by the user; if it is, issue a friendly warning.
 */
export class CheckMovement extends React.Component {
    render() {
        const {
            Accelerometer,
            Gyroscope,
        } = this.props;

        /*
        if (!Accelerometer && !Gyroscope) {
            // If both sensors are still initializing
            return null;
        }
        */
        return (
            <View>
                <Text>HELLLLOTEST</Text>
                <Text>
                    Acceleration has value: {Accelerometer}
                    Gyro has value: {Gyroscope}
                </Text>
            </View>
        );
    }
}

export default sensors({
    Accelerometer: {
        updateInterval: 10, // optional
    },
    Gyroscope: true,
})(CheckMovement);
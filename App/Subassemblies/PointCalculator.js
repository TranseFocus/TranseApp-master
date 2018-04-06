/**
    CHASE: This is where you will place your point mathematics.
 */

import React, { Component } from 'react';
import {
    Image,
    Text,
    StyleSheet,
    Dimensions,
    View,
    TouchableHighlight,
} from 'react-native';

var sWidth = Dimensions.get('window').width;
var sLength = Dimensions.get('window').height;

export class PointCalculator extends React.Component {

    /*
        set focus points; right now they earn a static 10 points per minute.
        CHASE: you can change this method as well as add new ones.
    */
    getPoints(timeTo) {
        return timeTo * (10/60);
    }

    render() {
        return (
            <View>
                {/*
                    begin display of points earned by certain amount of time
                */}
                <Text style = {{textAlign: 'center', fontWeight: 'bold', fontSize: (sLength * (2/25)), color: '#3CB371'}}>
                    You did it!
                </Text>
                <Text style = {{textAlign: 'center', fontWeight: 'bold', fontSize: (sLength * (1/25))}}>
                    + {this.getPoints(transeTime)} Focus Points!</Text>
            </View>
        );
    }
}
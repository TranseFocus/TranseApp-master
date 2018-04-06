import React, { Component } from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    Dimensions,
    View,
    StatusBar,
    TouchableHighlight,
    ImageBackground,
} from 'react-native';
import {FadeInView, FadeInViewMedium} from '../Subassemblies/FadeInView';
import {TimerCountdown} from '../Subassemblies/Timer';

var sWidth = Dimensions.get('window').width;
var sLength = Dimensions.get('window').height;

/*
    this screen displays an inspirational "preparation" background for the timer set.
 */
class EnterFocus extends React.Component {
    render() {
        return (
            <View>
            <View style = {styles.background}>
                <TimerCountdown
                    initialSecondsRemaining={7 * 1000}
                    onTimeElapsed={() => {this.props.navigation.navigate('inTranse', {
                        timeTo: transeTime,
                    });
                    }}
                    allowFontScaling={true}
                    style={{ color: '#9370DB'}}
                />

                <FadeInView>
                    <Text style = {styles.text}>
                        <Text style = {{fontSize: sLength * (1/23)}}>now entering focus mode. . .</Text>
                    </Text>
                </FadeInView>
                <FadeInView>
                    <Text style = {styles.text}> </Text>
                </FadeInView>
                <FadeInViewMedium>
                    <Text style = {styles.text}>let's get to work !</Text>
                </FadeInViewMedium>
            </View>
            </View>
        );
    }
}

export default EnterFocus;

const styles = StyleSheet.create({
    background: {
        aspectRatio: 1,
        backgroundColor: '#9370DB',
        color: 'white',
        width: sWidth,
        height: sLength,
        fontSize: (1/25) * sLength,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    },

    text: {
        color: 'white',
        fontSize: (1/25) * sLength,
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    },

});
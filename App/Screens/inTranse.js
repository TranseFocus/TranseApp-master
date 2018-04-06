
import React, { Component } from 'react';
import {
    Image,
    Text,
    StyleSheet,
    Dimensions,
    View,
    TouchableHighlight,
} from 'react-native';
import images from "../../assets/images";
import {TimerCountdown} from "../Subassemblies/Timer";
import {PointCalculator} from "../Subassemblies/PointCalculator";
var sWidth = Dimensions.get('window').width;
var sLength = Dimensions.get('window').height;
import {CheckMovement} from "../Subassemblies/CheckMovement";


class inTranseScreen extends React.Component {
    static navigationOptions = { header: null };

    /*
        constructor to take care of checker for
        if timer is finished and focus point incrementer
     */
    constructor(props) {
        super(props);
        this.state = {
            finished: false,
        }
    }

    /*
      conditional rendering function:
      a simple method to render certain components only upon the fulfillment of a condition
    */
     renderIf(condition, content) {
        if (condition) {
            return content;
        } else {
            return null;
        }
    }

    /*
        toggles boolean value for whether or not timer is finished;
        this will control a conditional display depending on whether or not
        all time has elapsed.
     */
    toggleFinished() {
        this.setState({
            finished: true,
        });
    }

    render() {
        /*
            set variables
            timeTo = the time that was selected by the user in transeSetUp screen.
        */
        const { params } = this.props.navigation.state;
        const timeTo = params ? params.timeTo : null;

        return (
            <View style={styles.protoView}>
                {/*spacer*/}
                <View style={{ flex: 2, width: sWidth, alignItems: 'center', justifyContent: 'center',}}>

                    {/*
                        render timer if the time selected has not yet elapsed or been ended early.
                    */}
                    {this.renderIf(!this.state.finished,
                        <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                            <TimerCountdown
                                initialSecondsRemaining={timeTo * 1000}
                                onTick={() => console.log('I ticked!')}
                                onTimeElapsed={() => {this.toggleFinished()}}
                                allowFontScaling={true}
                                style={{ fontSize: 45 }}
                            />
                            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Remaining</Text>
                        </View>
                    )}
                    {/*
                        end timer render
                    */}

                    {/*
                        calculate and render a points display that informs
                        the user of how many points they earned this session.
                    */}
                    {this.renderIf(this.state.finished,
                        <PointCalculator/>
                    )}
                </View>

                {/*
                    begin view of primary focus icon
                */}
                <View
                    style={{
                        flex: 2,
                        width: sWidth,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>

                    <View style={{ flex: 1, aspectRatio: 1 }}>
                        <Image
                            style={styles.bigIcon}
                            source={images.focusIcon}
                        />
                    </View>

                </View>
                {/*
                    end view of primary focus button
                */}

                {/*
                    begin view of unimportant placeholder buttons (i.e. break and end early)
                */}
                <View
                    style={{
                        flex: 2,
                        width: sWidth,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <View style={{ flex: 0.25 }} />
                    <View
                        style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>

                        {/*Placeholder button
                               container
                                    spacer
                                    button icon
                                    button label
                        */}
                        {/*TODO correctly format the highlight color of the buttons*/}
                        {/*TODO implement break functionality*/}
                        <TouchableHighlight
                            onPress={() => {}}
                            style={styles.minorButtons}>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 0.25 }} />
                                <Image
                                    style={styles.bigIcon}
                                    source={images.coffeeIcons}
                                />
                                <Text
                                    style={{
                                        alignSelf: 'center',
                                        fontWeight: 'bold',
                                        flex: 0.25,
                                    }}>
                                    Break
                                </Text>
                            </View>
                        </TouchableHighlight>

                        {/*settings button
                               container
                                    spacer
                                    button icon
                                    button label
                        */}
                        {/*TODO add so resistance to ending the transe early*/}

                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Home')}
                            style={styles.minorButtons}>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 0.25 }} />
                                <Image
                                    style={styles.bigIcon}
                                    source={images.exitIcon}
                                />
                                <Text
                                    style={{
                                        alignSelf: 'center',
                                        fontWeight: 'bold',
                                        flex: 0.25,
                                    }}>
                                    End Early
                                </Text>
                            </View>
                        </TouchableHighlight>

                    </View>
                    {/*
                        end view of unimportant placeholder buttons
                    */}

                    <View style={{ flex: 0.25 }} />
                </View>
            </View>
        );
    }
}

export default inTranseScreen;

const styles = StyleSheet.create({
    circle: {
        flex: 0,
        flexDirection: 'row',
        aspectRatio: 1,
        borderWidth: 4,
        borderColor: '#137547',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: sWidth * 0.7,
        width: sWidth * 0.7,

        padding: sWidth * 0.15,
    },
    protoView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: sLength * 0.1,
    },
    bigIcon: {
        flex: 1,
        width: 256,
        height: 256,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    minorButtons: {
        flex: 1,
    },
    mainWindow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#aaffd9',
    },
    pickerStyle: {},
});
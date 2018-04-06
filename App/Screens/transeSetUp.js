
import React, { Component } from 'react';
import {
    Text,
    Dimensions,
    StyleSheet,
    View,
    TouchableHighlight,
    Alert
} from 'react-native';
import {UntilPicker, ForPicker} from "../Subassemblies/Pickers";
import EnterFocus from "./enteringTranse";

var sWidth = Dimensions.get('window').width;
var sLength = Dimensions.get('window').height;

class TranseSetUpScreen extends React.Component {

    /*
        construct properties of the screen.
        single property: set "until" to true by default;
        this means that the Until Picker will be shown on the screen unless the user toggles the For button instead.
     */
    constructor(props) {
        super(props);
        this.state = {
            until: true,
        };
    }

    /*
        conditional rendering function:
        a simple method to determine whether or not to show certain components.
    */
    renderIf(condition, content) {
        if (condition) {
            return content;
        } else {
            return null;
        }
    }

    /*
        toggles boolean value whenever user presses the FOR highlight
    */
    toggleFor() {
        this.setState({
            until: false,
        });
    }

    /*
        toggles boolean value whenever user presses the UNTIL highlight
    */
    toggleUntil() {
        this.setState({
            until: true,
        });
    }

    /*
        Checks time picked and ensures that it is a valid time.
        If yes, it sends the user to the next screen. If no, makes them pick again.
     */
    validateInput() {
        if (transeTime === 0) {
            Alert.alert('You selected 0 minutes; pick a real time!');
        }
        else {
            this.props.navigation.navigate('EnterFocus', {
                timeTo: transeTime,
            });
        }
    }

    /*
        renderer function
    */
    render() {
    return (
        <View style={styles.protoView}>
        {/*
            begin full-page view for pickers
        */}

            {/*
               show guide messages for respective pickers; message changes as pickers change.
            */}
            <View style={{flex: 0.25, width: sWidth}}>
                {this.renderIf(this.state.until,
                    <Text style={{textAlign: 'center', fontSize: 26, fontStyle: 'italic', fontFamily: 'Verdana'}}>Focus
                        Until When?</Text>
                )}
                {this.renderIf(!this.state.until,
                    <Text style={{textAlign: 'center', fontSize: 26, fontStyle: 'italic', fontFamily: 'Verdana'}}>Focus
                        For How Long?</Text>
                )}
            </View>
            {/*
                end conditional messages
            */}

            {/* spacer */}

            {/*
                render each picker if user selects corresponding button (i.e. UNTIL or FOR)
            */}
            {this.renderIf(
                this.state.until,
                <UntilPicker/>
            )}
            {this.renderIf(
                !this.state.until,
                <ForPicker/>
            )}
            {/*
                end conditional rendering of pickers
            */}

            {/*
                begin buttons that toggle the UNTIL and FOR picker functionalities
            */}
            <View style={{flex: 0.5, width: sWidth}}/>
            <View style={{flex: 1, width: sWidth}}>
                <View style={{flex: 1, flexDirection: 'row', width: sWidth}}>
                    <TouchableHighlight
                        onPress={() => {
                            this.toggleUntil();
                        }}
                        underlayColor="#3CB371"
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: sLength * (0.5 / 10),
                        }}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Until</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => {
                            this.toggleFor();
                        }}
                        underlayColor="#3CB371"
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: sLength * (0.5 / 10),
                        }}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>For</Text>
                    </TouchableHighlight>
                </View>
                {/*
                    end buttons that control conditional rendering of pickers
                */}

                {/*
                    begin main button that enters the focus page; call validateInput() method
                    to ensure that a valid time is selected.
                */}
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: sLength * (0.25 / 10),
                    }}>
                    <TouchableHighlight
                        onPress={() => {
                            this.validateInput();
                        }}
                        style={{
                            flex: 1,
                            width: sWidth * 0.5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 20,
                            borderWidth: 4,
                            borderColor: '#137547',
                            backgroundColor: '#3CB371',
                        }}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>Transe</Text>
                    </TouchableHighlight>
                </View>
                {/*
                    end main navigatory button
                */}

            </View>
        </View>
    );
    }
}

export default TranseSetUpScreen;

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
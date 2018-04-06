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
import images from "../../assets/images";
import colors from "../../assets/styleDefs";

var sWidth = Dimensions.get('window').width;
var sLength = Dimensions.get('window').height;

class HomeScreen extends React.Component {
    static navigationOptions = { header: null };

    render() {
        return (
            //entire screen
            (
                <View style={styles.protoView}>

                    {/*
                        STATUSBAR component; hides the top status bar on both ios and android.
                        note: the statusbar can be re-shown if the user manually pulls it down; however,
                        after they pull it down it will disappear again within a few seconds.
                    */}
                    <StatusBar barStyle = "dark-content" hidden = {true}/>
                    {/*Hidden div to size the contained circle correctly */}

                    {/*
                        begin view of primary entrance button;
                        this button navigates user to the StatusCheck page.
                    */}
                    <View>
                        {/*Adds circle button to ui, contains focus icon*/}
                        {/*TODO correctly format the highlight color of the buttons*/}
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('StatusCheck')}
                            style={styles.circle}>
                            <View style={{ flex: 1, aspectRatio: 1 }}>
                                <Image
                                    style={styles.bigIcon}
                                    source={images.focusIcon}
                                />
                            </View>
                        </TouchableHighlight>
                        {/*Transe button label*/}
                        <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>
                            Enter Transe
                        </Text>
                    </View>
                    {/*
                        end primary entrance button view
                    */}

                    {/*
                        begin miscellaneous placeholder button view
                    */}
                    {/*misc buttons container*/}
                    <View style={{ flex: 1, width: sWidth }}>
                        {/*spacer*/}
                        <View style={{ flex: 0.25 }} />
                        {/*button container*/}
                        <View
                            style={{
                                flex: 0.5,
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}>

                            {/*Placeholder button
                               container
                                    spacer
                                    button icon
                                    button label
                        */}

                            {/*TODO find use for this button and implement*/}
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
                                        Placeholder
                                    </Text>
                                </View>
                            </TouchableHighlight>

                            {/*settings button
                               container
                                    spacer
                                    button icon
                                    button label
                        */}
                            {/*TODO add settings menu and figure out how react native settings work*/}
                            <TouchableHighlight
                                onPress={() => {}}
                                style={styles.minorButtons}>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flex: 0.25 }} />
                                    <Image
                                        style={styles.bigIcon}
                                        source={images.settingsIcon}
                                    />
                                    <Text
                                        style={{
                                            alignSelf: 'center',
                                            fontWeight: 'bold',
                                            flex: 0.25,
                                        }}>
                                        Settings
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        {/*spacer*/}
                        <View style={{ flex: 0.25 }} />
                    </View>
                    {/*
                       end miscellaneous placeholder button view
                    */}

                </View>
            )
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    circle: {
        //flex: 0,
        //flexDirection: 'row',
        aspectRatio: 1,
       //borderWidth: 4,
        //borderColor: '#137547',
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: sWidth * 0.6,
        width: sWidth * 0.6,

        //padding: sWidth * 0.15,
    },
    outerCircle: {
        //flex: 0,
        //position: 'absolute',
       //left: sWidth/2,
        //top: sLength/4,
        //flexDirection: 'column',
        aspectRatio: 1,
        borderWidth: (sWidth*0.3)-5,
        borderColor: 'rgba(0,0,0,0.5)',
        //alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        borderRadius: 23,
        width: sWidth*1.2 ,
        //padding: sWidth * 0.15,
    },


    protoView: {
        flex: 1,
        width: sWidth,
        height: sLength,
        flexDirection: 'column',
        alignItems: 'center',
        //justifyContent: 'center',
        paddingTop: sLength * 0.1,
        borderColor: 'black',
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
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        //alignContent: 'center',
        justifyContent: 'center',
    },
    pickerStyle: {},
});
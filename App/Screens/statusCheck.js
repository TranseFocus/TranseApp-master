import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { ConnectivityRenderer } from 'react-native-offline';
import AwesomeAlert from 'react-native-awesome-alerts';

class StatusCheckScreen extends React.Component {

    /*
        constructs properties of screen;
        single property, showAlert.
        showAlert will toggle whether or not the alert on screen is shown.
     */
    constructor(props) {
        super(props);
        this.state = {
            showAlert: true,
        };
    }

    /*
        function with which to hide alert by toggling showAlert variable
     */
    hideAlert() {
        this.setState({
            showAlert: false,
        });
    }

    /*
        renderer function
     */
    render() {
        return (
            <View style = {{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {/*
                    this component renders a certain alert depending upon the phone's internet connection.
                    if connected, it yields a warning that user is still connected.
                    if not, it yields a successful disconnection message and tells the user to continue.
                */}
                <ConnectivityRenderer>
                    {isConnected => (
                        isConnected ?
                            (
                                <AwesomeAlert
                                    show = {this.state.showAlert}
                                    overlayStyle = {{backgroundColor: '#9370DB'}}
                                    titleStyle = {{color: 'darkgreen', fontWeight: 'bold', fontSize: 21}}
                                    title = "Status Check"
                                    alertContainerStyle = {{padding: 10}}
                                    messageStyle = {{padding: 10, fontSize: 18, color: 'black', textAlign: 'left'}}
                                    message = "✖ You are connected to the Internet. Disconnect for maximized focus progress."
                                    closeOnTouchOutside={false}
                                    closeOnHardwareBackPress={false}
                                    showCancelButton={false}
                                    showConfirmButton={true}
                                    confirmTextStyle = {{fontWeight: 'bold', fontSize: 16}}
                                    confirmText="Got It"
                                    confirmButtonStyle = {{padding: 5}}
                                    confirmButtonColor="darkgreen"
                                    onConfirmPressed={() => {
                                        this.hideAlert();
                                        this.props.navigation.navigate('TranseSetUp')
                                    }}
                                />
                            )
                            :
                            (
                                <AwesomeAlert
                                    show = {this.state.showAlert}
                                    overlayStyle = {{backgroundColor: '#9370DB'}}
                                    titleStyle = {{color: 'darkgreen', fontWeight: 'bold', fontSize: 21}}
                                    title = "Status Check"
                                    alertContainerStyle = {{padding: 10}}
                                    messageStyle = {{padding: 10, fontSize: 18, color: 'black', textAlign: 'center'}}
                                    message = "✔ Successfully disconnected."
                                    closeOnTouchOutside={false}
                                    closeOnHardwareBackPress={false}
                                    showCancelButton={false}
                                    showConfirmButton={true}
                                    confirmTextStyle = {{fontWeight: 'bold', fontSize: 16}}
                                    confirmText= "Continue"
                                    confirmButtonStyle = {{padding: 5}}
                                    confirmButtonColor="darkgreen"
                                    onConfirmPressed={() => {
                                        this.hideAlert();
                                        this.props.navigation.navigate('TranseSetUp');
                                    }}
                                />
                            )
                    )}
                </ConnectivityRenderer>
            </View>
        );
    }
}

export default StatusCheckScreen;
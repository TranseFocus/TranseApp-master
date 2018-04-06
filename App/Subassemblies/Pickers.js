import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    ViewPropTypes as RNViewPropTypes
} from 'react-native';
import Picker from 'react-native-wheel-picker';

var PickerItem = Picker.Item;

const ViewPropTypes = RNViewPropTypes || View.propTypes;

var sWidth = Dimensions.get('window').width;
var sLength = Dimensions.get('window').height;
console.disableYellowBox = true;

/*
    UntilPicker contains code for the Until option within the TranseSetUp screen.
 */
export class UntilPicker extends React.Component{

    /*
        construct default properties of the UntilPicker.
        By default, set the selected indices of columns 1 through 3 to 0.
        These values will change upon user selection.
     */
    constructor(props) {
        super(props);
        global.transeTime = 0;
        this.state = {
            selectedItem1: 0,
            selectedItem2: 0,
            selectedItem3: 0,
            hourList: ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
            minuteList: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59', ],
            morningOrNight: ['AM', 'PM'],
        };
    }

    /*
        method to convert phone's current time to seconds, to be used for the UNTIL functionality
    */
    getCurrentTime() {
        // Creating variables to hold time.
        var totalSeconds, date, hour, minutes, seconds;

        // Creating Date() function object.
        date = new Date();

        // Getting current hour from Date object.
        hour = date.getHours();
        totalSeconds = hour * 3600;

        // Getting the current minutes from date object.
        minutes = date.getMinutes();
        totalSeconds += minutes * 60;

        //Getting current seconds from date object.
        seconds = date.getSeconds();
        totalSeconds += seconds;

        //gives us total seconds to perform arithmetic
        return totalSeconds;
    }

    /*
     Gets currentPhoneTime, asks user for time they'd like to study until,
     and then does basic arithmetic to return an accurate time value.
    */
    setFinalTime() {
        /*
          if user selected the UNTIL functionality, use arithmetic to transform option into seconds.
        */
        var secondsRequested = 0;
        var hours;

        /*
            if the user selected the number 12, treat that value as a zero.
         */
        if (this.state.hourList[this.state.selectedItem1] === '12') {
            hours = 0;
        } else {
            hours =
                Number.parseInt(this.state.hourList[this.state.selectedItem1], 10) *
                3600;
        }

        var minutes =
            Number.parseInt(this.state.minuteList[this.state.selectedItem2], 10) *
            60;
        var am_or_pm = this.state.morningOrNight[this.state.selectedItem3];

        /*
            if user selected PM, add 12 hours to the time calculation.
         */
        if (am_or_pm === 'PM') {
            secondsRequested += 12 * 3600; //this accounts for the first 12 hours of the day
        }

        //adds on requested hours and minutes
        secondsRequested += hours + minutes;

        /* if user requests time within the next day, do additional arithmetic */
        if (secondsRequested - this.getCurrentTime() < 0) {
            return secondsRequested + (24 * 3600 - this.getCurrentTime());
        } else {
            return secondsRequested - this.getCurrentTime();
        }
    }

    render() {
        /*
            store user-selected time in the transeTime variable
         */
        transeTime = this.setFinalTime();
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignSelf: 'center',
                    alignItems: 'center'
                }}>

                {/*
                    begin tri-column picker view
                */}
                <Picker
                    style={{
                        width: 100,
                        height: 100,
                    }}
                    selectedValue={this.state.selectedItem1}
                    itemStyle={{color:"black", fontSize:26}}
                    onValueChange={index => this.setState({selectedItem1: index})}>
                    {this.state.hourList.map((value, i) => (
                        <PickerItem label={value} value={i} key={value} />
                    ))}
                </Picker>
                <Picker
                    style={{
                        width: 100,
                        height: 100,
                    }}
                    selectedValue={this.state.selectedItem2}
                    itemStyle={{color:"black", fontSize:26}}
                    onValueChange={index => this.setState({selectedItem2: index})}>
                    {this.state.minuteList.map((value, i) => (
                        <PickerItem label={value} value={i} key={value} />
                    ))}
                </Picker>
                <Picker
                    style={{
                        width: 100,
                        height: 100,
                    }}
                    selectedValue={this.state.selectedItem3}
                    itemStyle={{color:"black", fontSize:26}}
                    onValueChange={index => this.setState({selectedItem3: index})}>
                    {this.state.morningOrNight.map((value, i) => (
                        <PickerItem label={value} value={i} key={value} />
                    ))}
                </Picker>
                {/*
                    end tri-column picker view
                */}

            </View>

        );
    }

}

/*
    ForPicker contains code for the FOR picker option within the TranseSetUp screen.
 */
export class ForPicker extends React.Component{

    /*
        construct default properties of the picker;
        the selected indices are initially 0 but will change upon user selection.
     */
    constructor(props) {
        super(props);
        global.transeTime = 0;
        this.state = {
            selectedItem1: 0,
            selectedItem2: 0,
            selectedItem3: 0,
            forHours: ['0','1','2','3','4','5','6','7','8','9','10','11','12',],
            forMinutes: ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59',],
        };
    }

    /*
      used within the UNTIL and FOR functionalities; gets currentPhoneTime, asks user for time they'd like to study until,
      and then does basic arithmetic to return an accurate time value.
    */
    setFinalTime() {
        // if user selects the "FOR" option, return (hours * 3600) + (minutes * 60) to get second count.
        return (
            Number.parseInt(this.state.forMinutes[this.state.selectedItem2], 10) *
            60 +
            Number.parseInt(this.state.forHours[this.state.selectedItem1], 10) *
            3600
        );
    }

    render() {
        transeTime = this.setFinalTime();
        return (
            <View
                style={{
                    marginTop: sLength * (1/10),
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>

                {/*
                    begin bi-column picker view
                */}
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Text style={{fontWeight: 'bold' }}>Hrs</Text>
                    <Picker
                        style={{
                            width: 150,
                            height: 100,
                        }}
                        selectedValue={this.state.selectedItem1}
                        itemStyle={{color:"black", fontSize:26}}
                        onValueChange={index => this.setState({selectedItem1: index})}>
                        {this.state.forHours.map((value, i) => (
                            <PickerItem label={value} value={i} key={value} />
                        ))}
                    </Picker>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Text style={{fontWeight: 'bold' }}>Mins</Text>
                    <Picker
                        style={{
                            width: 150,
                            height: 100,
                        }}
                        selectedValue={this.state.selectedItem2}
                        itemStyle={{color:"black", fontSize:26}}
                        onValueChange={index => this.setState({selectedItem2: index})}>
                        {this.state.forMinutes.map((value, i) => (
                            <PickerItem label={value} value={i} key={value} />
                        ))}
                    </Picker>
                </View>
                {/*
                    end bi-column picker view
                */}

            </View>
        );
    }
}

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
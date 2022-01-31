import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { RFValue } from "react-native-responsive-fontsize";
export default class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
      text:''
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }

  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(); // Today
    const maxDate = new Date(2022, 1, 19);
    const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';

    return (
      <View style={styles.container}>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="black"
          selectedDayColor="black"
          selectedDayTextColor="lime"
          onDateChange={this.onDateChange}
        />
        <Text style={styles.text}>Remainder:</Text>
      
        <TextInput
     style={[
             styles.inputFontLight,
                    styles.inputFontExtra,
                    styles.inputTextBig
                  ]}
     onChangeText={notification=>{this.setState({notification})}}
     placeholder={"work to do"}
     multiline={true}
                  numberOfLines={5}
                  placeholderTextColor={"#CCCCCC"}
                  
     />
     <Button  title='save' onPress={TextInput} />
     
     
     <TouchableOpacity onPress={this.setState.text} >
     </TouchableOpacity>
        <View>
          <Text>SELECTED START DATE:{ startDate }</Text>
          <Text>SELECTED END DATE:{ endDate }</Text>
        </View>

       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    paddingTop:20,
    backgroundColor: '#2A92AA',
    
    
  },
  text :{
    fontSize:15,
    fontFamily:'bold',
    textShadowColor:"black"
  },
  inputFontLight: {
    height: 250,
    
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "black",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontExtra: {
    marginTop: RFValue(15)
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5)
  },
  
});
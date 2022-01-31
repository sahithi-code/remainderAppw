import React,{Component} from 'react';
import {Text,View,StyleSheet,TextInput,Alert} from 'react-native'
import Calendar from './Calendar'
import { RFValue } from "react-native-responsive-fontsize";

export default class Notification extends Component{
constructor(){
  super()
  this.state={
  date:'' ,
  notification:''
  }
}

 render(){
   return(
     <View >
     <TextInput
     style={[
             styles.inputFontLight,
                    styles.inputFontExtra,
                    styles.inputTextBig
                  ]}
     onChangeText={date=>{this.setState({date})}}
     placeholder={"date:01/01/2022"}
     multiline={true}
                  numberOfLines={5}
                  placeholderTextColor={"#CCCCCC"}
                  
     />
     
     </View>
   )
 }

}

const styles = StyleSheet.create({
  
  inputFontLight: {
    height: RFValue(40),
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
})
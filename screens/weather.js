import React, { Component } from 'react';
import { Text,
        View,
        StyleSheet,
        Image ,
        Platform,
        StatusBar,
        SafeAreaView,
        ImageBackground} from 'react-native';

export default class WeatherScreen extends Component {
  constructor() {
    super();
    this.state = {
      weather: '',
    };
  }   

  getWeather = async () => {
    //change latitude and longitude
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=18.101&lon=78.851';
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          weather: responseJson, 
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount = () => {
    this.getWeather();
  };

  render() {
    if (this.state.weather === '') {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <ImageBackground style={styles.cloudImage}
         source={require('../sahithi.jpg')}
        >
        <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
          <View style={styles.subContainer}>
            <Text style={styles.title}>
              Weather
            </Text>
           
            <View style={styles.textContainer}>
            <Text style={styles.degree}>
              {this.state.weather.main.temp}&deg;C
            </Text>
            <Text style={{ fontSize: 30, margin:15,fontStyle:'bold'}}>
              humidity:{this.state.weather.main.humidity}
            </Text>
            <Text style={{fontSize: 20}}>
              {this.state.weather.weather[0].description}
            </Text>
            <Text style={{ fontSize: 18}}>
             sunrise :{this.state.weather.sys.sunrise}
            </Text>
          </View>
          </View>    
        </View>
        </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1
  },
   droidSafeArea: {
        height: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
  subContainer : { 
    flex: 1, 
    borderWidth: 1, 
    alignItems: 'center' 
    },
    title:{ 
      marginTop: 50, 
      fontSize: 30,
      fontWeight: '550' 
    },
    degree:{
    fontSize:25,
    fontFamily:'bold',
    marginTop:20,
    paddingBottom:2,
    marginLeft:150

    },
      
   cloudImage :{ 
     marginBottom:-200,
     width: -450, 
      height: 850, },
      
    textContainer : { 
      flex: 1,
      alignItems: 'center', 
      flexDirection:'row', 
      marginTop:-150
    }
});

import  React from 'react';
import { Text, View, StyleSheet, SafeAreaView,Platform,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen'
import Notification from './screens/nottfy';
import Calendar from './screens/Calendar';
import Weather from './screens/weather'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Weather" component={Weather} />
      <Stack.Screen name="Calendar" component={Calendar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



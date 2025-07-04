import 'react-native-reanimated';
import './gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import LandingScreen from './src/screens/LandingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import OtpVerification from './src/screens/OtpVerification';
import BuildingProfile from './src/screens/BuildingProfile';
import ProfileCompletion from './src/screens/ProfileCompletion';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MainDrawer = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Profile" component={Profile} />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Main" component={MainDrawer} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="OtpVerification" component={OtpVerification}/>
        <Stack.Screen name="BuildingProfile" component={BuildingProfile}/>
        <Stack.Screen name="ProfileCompletion" component={ProfileCompletion}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

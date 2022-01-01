import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Registration from './src/screens/Registration';
import RegistrationForm from './src/screens/RegistrationForm';
import Splash from './src/screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

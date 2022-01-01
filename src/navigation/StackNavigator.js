import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Registration from '../screens/Registration';
import RegistrationForm from '../screens/RegistrationForm';
const StackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="RegistrationForm" component={RegistrationForm} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});

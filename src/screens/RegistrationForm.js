import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const RegistrationForm = () => {
  return (
    <>
      <StatusBar translucent={true} />
      <View style={styles.container}>
        <Image
          source={require('../assets/Images/carLogo.png')}
          style={styles.logoImg}
        />
        <Text style={styles.htxt}>
          Become a{' '}
          <Text style={{color: 'green', fontSize: 25}}>Carpulling</Text>{' '}
          Partener
        </Text>
        <View style={styles.firstInput}>
          <TextInput style={styles.inputField} placeholder="Frist Name" />
          <TextInput style={styles.inputField} placeholder="Last Name" />
        </View>
        <View style={styles.firstInput}>
          <TextInput style={styles.inputField1} placeholder="phone Number" />
          {/* <TextInput style={styles.inputField} placeholder="Last Name" /> */}
        </View>
        <View style={styles.firstInput}>
          <TextInput style={styles.inputField1} placeholder="EmailID" />
        </View>
        <View style={styles.firstInput}>
          <TextInput style={styles.inputField1} placeholder="ID" />
        </View>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.btntxt}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RegistrationForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    height: 160,
    width: 160,
  },
  htxt: {
    fontSize: 15,
    color: 'black',
    bottom: 30,
    fontWeight: 'bold',
  },
  firstInput: {
    flexDirection: 'row',
    margin: 10,
  },
  inputField: {
    borderColor: 'gray',
    borderWidth: 2,
    marginLeft: 10,
    right: 10,
    width: 150,
    fontSize: 15,
    textAlign: 'center',
    borderRadius: 10,
  },
  inputField1: {
    borderColor: 'gray',
    borderWidth: 2,
    width: '100%',
    fontSize: 15,
    textAlign: 'center',
    borderRadius: 10,
  },
  btn: {
    backgroundColor: 'green',
    padding: 20,
    margin: 10,
    width: 260,
    alignItems: 'center',
    borderRadius: 30,
  },
  btntxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

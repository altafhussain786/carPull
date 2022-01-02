import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Registration = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor={'green'} />
      <View style={styles.container}>
        <Text style={styles.txt}>Registration</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegistrationForm')}>
            <View style={styles.btn}>
              <Text style={styles.btntxt}>Driver</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.btn}>
              <Text style={styles.btntxt}>Passenger</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.htxt}>
            Become a{' '}
            <Text style={{color: 'green', fontSize: 25}}>Carpulling</Text>
            Partener
          </Text>
        </View>
      </View>
    </>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  txt: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'green',
  },
  btnContainer: {
    marginBottom: 30,
  },
  btn: {
    backgroundColor: 'green',
    padding: 20,
    margin: 10,
    width: 180,
    alignItems: 'center',
    borderRadius: 30,
  },
  btntxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  htxt: {
    fontSize: 15,
    color: 'black',
    top: 55,
    fontWeight: 'bold',
  },
});

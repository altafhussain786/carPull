import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Registration = () => {
  return (
    <>
      <StatusBar backgroundColor={'green'} />
      <View style={styles.container}>
        <Text style={styles.txt}>Registration</Text>

        <TouchableOpacity>
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
    </>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  txt: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  btn: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    width: 180,
    alignItems: 'center',
    borderRadius: 30,
  },
  btntxt: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

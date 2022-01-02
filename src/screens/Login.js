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
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

const Login = ({navigation}) => {
  return (
    <>
      <ScrollView showsHorizontalScrollIndicator={false}>
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
            <Icon style={styles.iconSt} name="user" size={30} color={'black'} />
            <TextInput
              style={styles.inputField1}
              placeholder="Enter your Email"
            />
            {/* <TextInput style={styles.inputField} placeholder="Last Name" /> */}
          </View>
          <View style={styles.firstInput}>
            <Icon style={styles.iconSt} name="key" size={30} color={'black'} />

            <TextInput style={styles.inputField1} placeholder="Password" />
          </View>
          <View style={styles.bottomBtn}>
            <TouchableOpacity>
              <View style={styles.btn1}>
                <Text style={styles.btntxt1}>Lgoin</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('RegistrationForm');
              }}>
              <View style={styles.btn}>
                <Text style={styles.btntxt}>Register</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '25%',
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

  inputField1: {
    // borderColor: 'gray',
    // borderWidth: 0.1,
    borderBottomWidth: 1,
    width: '85%',
    fontSize: 15,
    textAlign: 'center',
    right: 15,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 30,
    width: 150,
    alignItems: 'center',
    borderRadius: 10,
  },
  btntxt: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  btn1: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 30,
    width: 150,
    alignItems: 'center',
    borderRadius: 10,
  },
  btntxt1: {
    color: 'green',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bottomBtn: {
    flexDirection: 'row',
  },
  iconSt: {
    top: 10,
    left: 30,
  },
});

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const RegistrationForm = ({navigation}) => {
  const [firstName, setfirstName] = React.useState();
  const [lastName, setlastName] = React.useState();
  const [phoneNumber, setphoneNumber] = React.useState();
  const [email, setemail] = React.useState();
  const [password, setpassword] = React.useState();
  const [typeOf, settypeOf] = React.useState();

  //   {
  //     "firstName":"altaf",
  //     "lastName":"hussain",
  //     "phoneNumber":"03493480304",
  //     "email":"altafbhai@gmail.com",
  //     "password":"abcd321",
  //     "typeof":"passenger"
  // }

  const signupDate = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    password: password,
    typeof: typeOf,
  };

  const signUp = async () => {
    // navigation.navigate('Map');

    console.log(JSON.stringify(signupDate));

    await fetch('https://carpull.herokuapp.com/driver/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-Type': 'application/json',
      },
      body: JSON.stringify(signupDate),
    })
      .then(res => res.json())
      .then(result => {
        Alert.alert('sucessfully send data');
        console.log('Login===>', result);
        navigation.navigate('login');
      })
      .catch(err => {
        console.log('Error==>', err);
      });
  };
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
            <TextInput
              style={styles.inputField}
              onChangeText={value => setfirstName(value)}
              placeholder="Frist Name"
            />
            <TextInput
              style={styles.inputField}
              onChangeText={value => setlastName(value)}
              placeholder="Last Name"
            />
          </View>
          <View style={styles.firstInput}>
            <TextInput
              style={styles.inputField1}
              onChangeText={value => setphoneNumber(value)}
              placeholder="phone Number"
            />
            {/* <TextInput style={styles.inputField} placeholder="Last Name" /> */}
          </View>
          <View style={styles.firstInput}>
            <TextInput
              style={styles.inputField1}
              onChangeText={value => setemail(value)}
              placeholder="Email"
            />
            {/* <TextInput style={styles.inputField} placeholder="Last Name" /> */}
          </View>

          <View style={styles.firstInput}>
            <TextInput
              style={styles.inputField1}
              secureTextEntry={true}
              onChangeText={value => setpassword(value)}
              placeholder="Password"
            />
          </View>
          <View style={styles.firstInput}>
            <TextInput
              style={styles.inputField1}
              placeholder="Type"
              onChangeText={value => settypeOf(value)}
            />
          </View>
          <View style={styles.bottomBtn}>
            <TouchableOpacity onPress={signUp}>
              <View style={styles.btn}>
                <Text style={styles.btntxt}>Register</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={styles.btn1}>
                <Text style={styles.btntxt1}>Lgoin</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    padding: 10,
    margin: 10,
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
    margin: 10,
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
});

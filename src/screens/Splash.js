import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('StackNavigator');
    }, 2000);
  }, []);
  return (
    <>
      <StatusBar backgroundColor={'white'} />
      <View style={styles.container}>
        <Image
          style={styles.logoImg}
          source={require('../assets/Images/carLogo.png')}
        />
        <Text style={styles.name}>
          Car<Text style={{color: 'green'}}>Pulling</Text>
        </Text>
      </View>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoImg: {
    height: 260,
    width: 260,
  },
  name: {
    fontSize: 35,
    bottom: 50,
    fontWeight: 'bold',
    color: 'black',
  },
});

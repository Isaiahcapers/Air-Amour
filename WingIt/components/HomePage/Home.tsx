import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  View,
  Button,
} from 'react-native';
import style from './style';
const logo = require('./WingIt-Logo.png');

const Home = () => {
  return (
    <SafeAreaView style={style.scrollView}>
      <ScrollView contentContainerStyle={style.container}>
        <View style={style.imageContainer}>
          <Image source={logo} style={style.image} />
          <Text> Wing It</Text>
        </View>
        <View style={style.buttonContainer}>
          <View style={style.btn}>
            <Button title="SIGN UP" onPress={() => console.log('Sign up')} />
          </View>
          <View style={style.btn}>
            <Button title="LOGIN" onPress={() => console.log('Login')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

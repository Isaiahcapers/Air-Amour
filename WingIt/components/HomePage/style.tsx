import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
    btn: {
        backgroundColor: 'green',
        margin: 20,
    },
});

export default style;

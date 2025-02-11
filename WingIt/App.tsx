import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './Navigation/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
        <MainNavigation />
    </NavigationContainer>
  );
};

export default App;

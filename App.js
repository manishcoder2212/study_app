import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import *as React from 'react';
import { createAppContainer , createSwitchNavigator } from 'react-navigation';
import TextbookSection from './TextbookSection';
import AllInOne from './AllInOne';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
  );
}
}

const switchNavigator = createSwitchNavigator({
  SectionTextbook:{screen: TextbookSection},
  InOneAll:{screen:AllInOne },
  

})

const AppContainer =  createAppContainer(switchNavigator);
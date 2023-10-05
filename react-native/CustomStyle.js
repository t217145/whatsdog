import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  btnContainer: {
    marginLeft: 80,
    marginRight: 80,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  formStyle : {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 30, 
    marginRight: 30, 
    marginTop: 30
  },
  drawContainerCardStyle: {
    margin: 50
  },
  drawContainerButtonStyle: {
    margin: 50
  }
})
module.exports = styles;
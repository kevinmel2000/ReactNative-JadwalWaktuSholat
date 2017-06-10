import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import App from './src/App'

export default class learningReactNative extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('learningReactNative', () => learningReactNative);

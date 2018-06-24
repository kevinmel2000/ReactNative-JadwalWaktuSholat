import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router } from './Router'
import Main from './components/Main'
import About from './components/About'

export default class App extends Component {
  render() {
    return (
        <About/>
    );
  }
}
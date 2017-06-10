import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Axios from 'axios'

export default class Main extends Component {
  constructor(){
    super()
    this.state = {
      waktuSholat : null
    }
  }

  changePage(){
    this.props.navigation.navigate('About')
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={[styles.box1, styles.iconWrapper]}>
            <TouchableHighlight onPress={() => { this.changePage() }}>
              <Icon name="ios-add" style={styles.box1Icon} />
            </TouchableHighlight>
          </View>
          <View style={[styles.box2, styles.iconWrapper]}>
            <Icon name="ios-person" style={styles.box1Icon} />
          </View>
          <View style={[styles.box3, styles.iconWrapper]}>
            <Icon name="ios-apps" style={styles.box1Icon} />
          </View>
          <View style={[styles.box4, styles.iconWrapper]}>
            <Icon name="ios-body" style={styles.box1Icon} />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 2,
    backgroundColor: '#D65F5F',
  }, 
  iconWrapper:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1Icon: {
    fontSize: 80,
    color: 'white'
  },
  box2: {
    flex: 2,
    backgroundColor: '#FAF99F'
  },
  box3: {
    flex: 2,
    backgroundColor: '#A1F6B6'
  },
  box4: {
    flex: 2,
    backgroundColor: '#78D8D0'
 }
});
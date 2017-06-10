import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Dash from 'react-native-dash';
import Axios from 'axios'

export default class About extends Component {
  constructor()
  {
    super()
    this.state = {
      curTime: '',
      waktuSholat : {}
    }
  }

  componentWillMount()
  {
     setInterval(function(){
        this.setState({
            curTime: new Date().toLocaleString()
        })
    }.bind(this), 1000);

    Axios
    .get('https://time.siswadi.com/pray/?address=Cirebon')
    .then((data) => {
      this.setState({
        waktuSholat : data.data.data
      })
    })
    .catch((err) => {
      // console.log(err)
      Alert.alert("Unable To Connect")
    })
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
          <Icon name="ios-pin" size={30} style={styles.logo}/>
            <Text style={styles.headerText}>Cirebon, Indonesia</Text>
            <Text style={styles.headerDesc}>{ this.state.curTime }</Text>
          </View>
          <View style={styles.content}>
            <ScrollView>
              <View style={styles.list}>
                  <View style={styles.listInfo}>
                    <Text style={styles.listText}>Subuh</Text>
                  </View>
                  <Text style={styles.listValue}> {this.state.waktuSholat.Fajr} </Text>
              </View>
              <View style={styles.list}>
                  <View style={styles.listInfo}>
                    <Text style={styles.listText}>Dzuhur</Text>
                  </View>
                  <Text style={styles.listValue}> {this.state.waktuSholat.Dhuhr} </Text>
              </View>
              <View style={styles.list}>
                  <View style={styles.listInfo}>
                    <Text style={styles.listText}>Ashar</Text>
                  </View>
                  <Text style={styles.listValue}> {this.state.waktuSholat.Asr} </Text>
              </View>
              <View style={styles.list}>
                  <View style={styles.listInfo}>
                    <Text style={styles.listText}>Maghrib</Text>
                  </View>
                  <Text style={styles.listValue}> {this.state.waktuSholat.Maghrib} </Text>
              </View>
              <View style={styles.list}>
                  <View style={styles.listInfo}>
                    <Text style={styles.listText}>Isya</Text>
                  </View>
                  <Text style={styles.listValue}> {this.state.waktuSholat.Isha} </Text>
              </View>
              <View style={styles.list}>
                  <View style={styles.listInfo}>
                    <Text style={styles.listText}>Sepertiga Malam</Text>
                  </View>
                  <Text style={styles.listValue}> {this.state.waktuSholat.SepertigaMalam} </Text>
              </View>
              <View style={styles.list}>
                  <View style={styles.listInfo}>
                    <Text style={styles.listText}>Duapertiga Malam</Text>
                  </View>
                  <Text style={styles.listValue}> {this.state.waktuSholat.DuapertigaMalam} </Text>
              </View>
            </ScrollView>
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor : '#40898f',
    flex: 1,
  },
  logo: {
    color: 'white',
    fontSize: 80,
    marginTop: 80
  },
  header:{
    alignItems: 'center',
    marginBottom: 40,
    flex: 2
  },
  headerText: {
    marginTop: 20,
    color: 'white',
    fontSize: 20
  },
  headerDesc: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center'
  },
  content: {
    backgroundColor: '#393e42',
    flex: 3,
  },
  list: {
    borderBottomWidth: 1,
    borderBottomColor: '#3f444a',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
  },
  listInfo: {
    flex:4
  },
  listText: {
    color: 'white',
    fontSize: 20,
},
  listDesc: {
    
  },
  listValue: {
    flex: 1,
    color: '#938549',
    fontWeight: '200',
    fontSize: 20,

  }
})
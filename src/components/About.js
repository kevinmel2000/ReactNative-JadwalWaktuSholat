import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  StatusBar,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from 'react-native-searchbar';
import Axios from 'axios'
import Spinner from 'react-native-spinkit'

export default class About extends Component {
  constructor()
  {
    super()
    this.state = {
      curTime: '',
      waktuSholat : {},
      isLoading: true,
      searchQuery: "bandung",
      location: "bandung, indonesia",
      mapImage: null,
      
    }
  }

  componentWillMount()
  {
     setInterval(function(){
        this.setState({
            curTime: new Date().toLocaleString()
        })
    }.bind(this), 1000);

    this.fetchData()
   
  }

  fetchData(){
    Axios
    .get(`http://muslimsalat.com/${this.state.searchQuery}.json?key=bd099c5825cbedb9aa934e255a81a5fc&method=3`)
    .then((data) => {
      console.log(data.data)
      this.setState({
        waktuSholat : data.data.items[0],
        mapImage: data.data.map_image,
        isLoading: false,
        location: data.data.title
      })
    })
    .catch((err) => {
      Alert.alert("Unable To Connect")
    })
  }
  componentDidMount(){ setTimeout(() => this.setState({isLoading: false}) ,3000) }
  loadingView = () => (<Spinner isVisible={this.state.isLoading} size={100} type="Bounce" color="#40898f" />)

  onSubmit(){
    this.fetchData()
    this.searchBar.hide()
    this.setState({
      isLoading: true
    })
  }

  content() {
    return (
      <View>
        
          
            <ScrollView
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.list}>
                  <View style={styles.listInfo}>
                    <Text style={styles.listText}>Subuh</Text>
                  </View>
                  <Text style={styles.listValue}> {this.state.waktuSholat.shurooq} </Text>
              </View>
              <View style={styles.list}>
                  <View style={styles.listInfo}>
                    <Text style={styles.listText}>Dzuhur</Text>
                  </View>
                  <Text style={styles.listValue}> {this.state.waktuSholat.dhuhr} </Text>
              </View>
              <View style={styles.list}>
                  <View style={styles.listInfo}>
                    <Text style={styles.listText}>Ashar</Text>
                  </View>
                  <Text style={styles.listValue}> {this.state.waktuSholat.asr} </Text>
              </View>
              <View style={styles.list}>
                  <View style={styles.listInfo}>
                    <Text style={styles.listText}>Maghrib</Text>
                  </View>
                  <Text style={styles.listValue}> {this.state.waktuSholat.maghrib} </Text>
              </View>
              <View style={styles.list}>
                  <View style={styles.listInfo}>
                    <Text style={styles.listText}>Isya</Text>
                  </View>
                  <Text style={styles.listValue}> {this.state.waktuSholat.isha} </Text>
              </View>
       
            </ScrollView>
        
      </View>
    );
  }

  render() {
    var content
    if(this.state.isLoading){
      content = (
        <View style={[styles.content, styles.contentLoading]}>
          {this.loadingView()}
           
        </View>
      )
    } else {
      content = (
        <View style={styles.content}>
          { this.content()}
        </View>
      )
    }
    
    return (
      
        <View style={styles.container}>
          <StatusBar backgroundColor="#40898f" />
        
          <SearchBar
            ref={(ref) => this.searchBar = ref}
            data={[1,2,3,4]}
            handleResults={() => {}}
            showOnLoad={false}
            handleChangeText={(val) => this.setState({searchQuery: val})}
            onSubmitEditing={this.onSubmit.bind(this)}
          />

          <View style={styles.header}>
            <Icon onPress={() => this.searchBar.show()} name="ios-search" size={40} style={{color: 'white', position: 'absolute', right: 20, top: 10}}/>
            {/* <Icon name="ios-pin" size={30} style={styles.logo}/> */}
            <Image source={{uri: this.state.mapImage}}   style={{ marginTop: 80, width: 150, height: 150, borderWidth: 1 }} />
            <View style={{alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', width: '80%'}}>
              <Text style={[styles.headerText, {fontSize: 15, textAlign: 'center', marginBottom: 10}]}>{ this.state.location }</Text>
            </View>
            <Text style={styles.headerDesc}>{ this.state.curTime }</Text>
          </View>

          {/* <SafeAreaView> */}
            { content }
          {/* </SafeAreaView> */}
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
    flex: 2,
  },
  contentLoading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    borderBottomWidth: 1,
    borderBottomColor: '#3f444a',
    padding: 15,
    flex: 1,
    flexDirection: 'row',
  },
  listInfo: {
    flex:3
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
    marginLeft: -10,

  }
})
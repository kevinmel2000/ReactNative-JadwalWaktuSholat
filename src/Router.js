import { StackNavigator } from 'react-navigation'
import Main from './components/Main'
import About from './components/About'
 
export const Router = StackNavigator({
    Main: { 
        screen: Main ,
        navigationOptions: ({navigation}) => ({
          header: null  
        })
    },
    About: { 
        screen: About,
        navigationOptions: ({navigation}) => ({
          header: null,
          headerStyle: { backgroundColor : '#04243d', shadowColor: '#04243d', shadowOffset : {height : 0} },
          headerTintColor: 'white'
        })
    }
})
import React from 'react';
import {createStackNavigator,createDrawerNavigator,  } from 'react-navigation';
import {Image} from 'react-native';
import Login from '../../app/components/Login';
import Profile from '../../app/components/Profile';
import Signup from '../../app/components/Signup';
import {Report} from '../../app/components/Report';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Screen1 = createStackNavigator({
  Home: {
    screen: Login}

});

const Screen2 = createStackNavigator({
  Profile: {
    screen: Profile,

    navigationOptions: ({ navigation }) => ({ // Title to appear in status bar
      headerLeft:  <FontAwesome name='bars' color='white' size={35} style={{marginLeft:30}} onPress={() => navigation.toggleDrawer() } />
    ,headerTintColor: "blue",
            headerStyle: {
              backgroundColor:"black"
            }
  })

  }
});
const Screen3 = createStackNavigator({
  Report: {
    screen: Report,
    navigationOptions: ({ navigation }) => ({ // Title to appear in status bar
      headerLeft:  <FontAwesome name='bars' color='white' size={35} style={{marginLeft:30}} onPress={() => navigation.toggleDrawer() } />
    ,headerTintColor: "blue",
            headerStyle: {
              backgroundColor:"black"
            }
  })

  }
});


export const MyDrawer = createDrawerNavigator({

Home: { screen: Login,
  navigationOptions: {
      drawerLabel: () => null,
       drawerLockMode: 'locked-closed',
  }
},
Profile: { screen: Screen2,
  navigationOptions: {
        drawerLabel: 'Home'
}
},
Signup: { screen: Signup,
  navigationOptions: {
        drawerLabel: () => null,
         drawerLockMode: 'locked-closed',
    },
 },
 Report: {
   screen: Screen3,
 },

});

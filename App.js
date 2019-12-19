/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from "./src/Home.js";
import Setting from "./src/Setting.js";
import Login from "./src/setting/Login.js";


const TabStack = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      // title: "ddd"
      header: null//去掉标题栏
    }
  },
  Setting: {
    screen: Setting,
    navigationOptions: {
      header: null//去掉标题栏
    }
  }
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    header: null,//去掉标题栏
    // headerStyle: {
    //   backgroundColor: '#f4511e',
    // },
    // headerTintColor: '#fff',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // },
  }
});

let AppStack = createStackNavigator({
  Home: {
    screen: TabStack,
    navigationOptions: {
      header: null//去掉标题栏
    }
  },
  Login: Login
})


export default createAppContainer(AppStack);

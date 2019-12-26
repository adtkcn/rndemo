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
import Contact from "./src/Contact.js";

import Setting from "./src/Setting.js";
import Login from "./src/setting/Login.js";
import Chat from "./src/Chat.js";

const TabStack = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "消息",
      // header: null//去掉标题栏
    }
  },
  Contact: {
    screen: Contact,
    navigationOptions: {
      title: "通信录",
      // header: null//去掉标题栏
    }
  },
  Setting: {
    screen: Setting,
    navigationOptions: {
      title: "设置",
      // header: null//去掉标题栏
    }
  }
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    showIcon: false,
    labelStyle: {
      fontSize: 16,
      paddingBottom: 10

    }
  },
  defaultNavigationOptions: {}
});

let AppStack = createStackNavigator({
  Home: {
    screen: TabStack,
    navigationOptions: {
      header: null//去掉标题栏
    }
  },
  Chat: Chat,
  Login: Login
})


export default createAppContainer(AppStack);

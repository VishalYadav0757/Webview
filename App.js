import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from './src/Dashboard';
import Splash from './src/Splash';
import Signup from './src/Signup';
import Google from './src/Google';
import Yahoo from './src/Yahoo';

const AppNavigator = createStackNavigator(
  {
    Splash: Splash,
    Dashboard: Dashboard,
    Signup: Signup,
    Google: Google,
    Yahoo: Yahoo
  },
  {
    initialRouteName: "Splash",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(AppNavigator);
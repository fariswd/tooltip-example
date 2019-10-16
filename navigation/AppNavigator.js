import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import ProfileScreen from '../screens/ProfileScreen'


export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Profile: createStackNavigator({Profile: ProfileScreen}),  
    Main: MainTabNavigator,
  })
);

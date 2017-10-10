/**
 * Auth0Sample 01-Custom-Form
 * https://github.com/auth0/react-native-auth0
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import { StackNavigator } from 'react-navigation';

const Navigation = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
});

export default class Auth0Sample extends Component {
  constructor(props) {
    super(props);
    this.state = { accessToken: null }
  }

  render() {
    return (
      <Navigation />
    );
  }
}

AppRegistry.registerComponent('Auth0Sample', () => Auth0Sample);

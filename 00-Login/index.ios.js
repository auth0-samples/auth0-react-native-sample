/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Auth0 from 'react-native-auth0';

var credentials = require('./auth0-credentials');
const auth0 = new Auth0(credentials);

export default class Auth0Sample extends Component {
  _onLogin() {
    auth0
        .webAuth
        .authorize({scope: 'openid profile'})
        .then(credentials => console.log(credentials))
        .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Auth0 Login Sample
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button onPress={this._onLogin} title="Log In" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Auth0Sample', () => Auth0Sample);

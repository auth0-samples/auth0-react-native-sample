import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Auth0 from 'react-native-auth0';

var credentials = require('../auth0-credentials');
const auth0 = new Auth0(credentials);

export default class ProfileScreen extends React.Component {

  constructor(props) {
    super(props);
    this.credentials = this.props.navigation.state.params.credentials;
  }

  static navigationOptions = {
    title: 'Profile'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import Auth0, {useAuth0, Auth0Provider} from 'react-native-auth0';

var credentials = require('./auth0-configuration');
const auth0 = new Auth0(credentials);

const Home = () => {
  let [accessToken, setAccessToken] = useState(null);
  const {authorize, clearSession, user} = useAuth0();

  const onLogin = async () => {
    try {
      const credentials = await authorize({scope: 'openid profile email'});
      console.log(credentials);
      Alert.alert('AccessToken: ' + credentials.accessToken);
      setAccessToken(credentials.accessToken);
    } catch (e) {
      console.log(e);
    }
  };

  const loggedIn = user !== undefined && user !== null;

  const onLogout = async () => {
    try {
      await clearSession();
      Alert.alert('Logged out!');
      setAccessToken(null);
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Auth0Sample - Login </Text>
      <Text>You are{loggedIn ? ' ' : ' not '}logged in. </Text>
      <Button
        onPress={loggedIn ? onLogout : onLogin}
        title={loggedIn ? 'Log Out' : 'Log In'}
      />
    </View>
  );
};

const App = () => {
  return (
    <Auth0Provider
      domain="elkdanger.eu.auth0.com"
      clientId="BnUCpXKbK4QkYlXfRuKqhD3Z0KZfjexI">
      <Home />
    </Auth0Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;

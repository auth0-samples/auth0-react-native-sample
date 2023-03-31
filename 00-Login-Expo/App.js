import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import config from './auth0-configuration';

const Home = () => {
  const {authorize, clearSession, user, error, getCredentials} = useAuth0();

  const onLogin = async () => {
    try {
      await authorize({scope: 'openid profile email'}, {customScheme: 'auth0.com.auth0samples'});
      let credentials = await getCredentials();
      console.log(credentials)
      Alert.alert('AccessToken: ' + credentials.accessToken);
    } catch (e) {
      console.log(e);
    }
  };

  const loggedIn = user !== undefined && user !== null;

  const onLogout = async () => {
    try {
      await clearSession({customScheme: 'auth0.com.auth0samples'});
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Auth0Sample - Login </Text>
      {user && <Text>You are logged in as {user.name}</Text>}
      {!user && <Text>You are not logged in</Text>}
      {error && <Text>{error.message}</Text>}
      <Button
        onPress={loggedIn ? onLogout : onLogin}
        title={loggedIn ? 'Log Out' : 'Log In'}
      />
    </View>
  );
};

const App = () => {
  return (
    <Auth0Provider domain={config.domain} clientId={config.clientId}>
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
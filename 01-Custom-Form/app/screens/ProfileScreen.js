import React, { Component } from 'react';
import {
  Button,
  Image,
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
    this.profile = this.props.navigation.state.params.profile;
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Profile',
    headerLeft: <Button title="Logout" onPress={() => navigation.navigate('Home')} />
  });

  callAPI = () => {
    // You need to set a working URL to your API server.
    fetch("https://locahost/private/api", {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.credentials.accessToken
      }
    })
      .then((response) => console.log(response.json()))
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.header} >
          Welcome {this.profile.name}
        </Text>
        <Image
          source={{ uri: this.profile.picture }}
          style={{ width: 100, height: 100 }}
        />
        <Button
          onPress={() => this.callAPI()}
          title="CALL API"
        />
        <Text>{JSON.stringify(this.profile, null, 2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontWeight: '300',
    padding: 20
  }
});
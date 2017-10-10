import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  View
} from 'react-native';
import LoginModal from '../modals/LoginModal'

export default class HomeScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = { modalVisible: false };
      this.onAuth = this.onAuth.bind(this)
    }
  
    static navigationOptions = {
      title: 'Home'
    };

    onAuth = (credentials) => {
      this.setState({modalVisible: false}, () => this.props.navigation.navigate('Profile', {credentials: credentials}))
    };

    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Button
            onPress={() => this.setState({modalVisible: true})}
            title="Log In"
          />
          <LoginModal modalVisible={this.state.modalVisible} onAuth={this.onAuth}/>
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
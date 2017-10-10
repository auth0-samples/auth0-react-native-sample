
import React, { Component } from 'react';
import {
    Modal
} from 'react-native';
import Login from '../components/Login'

export default class LoginModal extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
        >
          <Login onAuth={this.props.onAuth}/>
        </Modal>
      );
    }
  }
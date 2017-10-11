import React, { Component } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import Auth0 from 'react-native-auth0';
import LoginForm from './LoginForm';

var credentials = require('../auth0-credentials');
const auth0 = new Auth0(credentials);

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.realmLogin = this.realmLogin.bind(this);
    }

    onSuccess(credentials) {
        auth0.auth
            .userInfo({ token: credentials.accessToken })
            .then(profile => {
                this.props.onAuth(credentials, profile);
            })
            .catch(error => this.alertError(error.json.error_description));
    }

    alertError(message) {
        Alert.alert(
            'Error',
            message,
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            { cancelable: false }
        );
    }

    realmLogin(username, password) {
        auth0.auth
            .passwordRealm({
                username: username,
                password: password,
                realm: 'Username-Password-Authentication',
                scope: 'openid profile email',
                audience: 'https://' + credentials.domain + '/userinfo'
            })
            .then(credentials => {
                this.onSuccess(credentials);
            })
            .catch(error => this.alertError(error.json.error_description));
    }

    webAuth(connection) {
        auth0.webAuth
            .authorize({
                scope: 'openid profile email',
                connection: connection,
                audience: 'https://' + credentials.domain + '/userinfo'
            })
            .then(credentials => {
                this.onSuccess(credentials);
            })
            .catch(error => this.alertError(error.error_description));
    };

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../images/logo.png')}
                    />
                    <Text style={styles.title}>Auth0</Text>
                </View>
                <View style={styles.socialContainer}>
                    <TouchableHighlight onPress={() => this.webAuth('facebook')}>
                        <Image
                            style={styles.socialIcon}
                            source={require('../images/facebook.png')}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.webAuth('google-oauth2')}>
                        <Image
                            style={styles.socialIcon}
                            source={require('../images/google.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm realmLogin={this.realmLogin} />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    formContainer: {
        flex: 2,
    },
    headerContainer: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        justifyContent: 'center',
    },
    socialContainer: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 10,
        width: 100,
        textAlign: 'center',
        fontSize: 16
    },
    socialIcon: {
        marginTop: 10
    }
});
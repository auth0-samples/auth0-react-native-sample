import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "", usernameError: false, passwordError: false }
    }

    validateLogin = () => {

        usernameError = false
        passwordError = false

        if (!this.state.username.length) {
            usernameError = true
        }
        if (!this.state.password.length) {
            passwordError = true
        }
        this.setState({usernameError: usernameError, passwordError: passwordError})
        if (usernameError === false && passwordError === false) {
            this.props.realmLogin(this.state.username, this.state.password)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Email or username"
                        placeholderTextColor="rgba(44,44,44,0.4)"
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input, this.state.usernameError && styles.inputError]}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({ username: text.trim() })}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="rgba(44,44,44,0.4)"
                        secureTextEntry
                        returnKeyType="go"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={[styles.input, this.state.passwordError && styles.inputError]}
                        ref={(input) => this.passwordInput = input}
                        onChangeText={(text) => this.setState({ password: text.trim() })}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => this.validateLogin()}
                    >
                        <Text style={styles.button}>LOG IN ></Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flex: 3,
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20
    },
    input: {
        height: 50,
        backgroundColor: '#FFFFFF',
        marginBottom: 15,
        color: '#333333',
        paddingHorizontal: 10,
        borderColor: '#eaeaea',
        borderWidth: 1.0
    },
    inputError: {
        borderColor: '#ff0000'
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: '#d34a2e',
        paddingVertical: 20,
        justifyContent: 'center'
    },
    button: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '400',
        fontSize: 20
    }
});
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
        this.state = { username: null, password: null, usernameError: false, passwordError: false }
    }

    validateLogin = () => {
        if (this.state.username === null || this.state.password === null) {
            this.setState( {usernameError: true, passwordError: true})
        } else {
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
        paddingHorizontal: 10
    },
    input: {
        height: 40,
        backgroundColor: '#FFFFFF',
        marginBottom: 15,
        color: '#333333',
        paddingHorizontal: 10,
        borderColor: '#eaeaea',
        borderWidth: 1.0
    },
    inputError: {
        borderColor: '#eaeaea'
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
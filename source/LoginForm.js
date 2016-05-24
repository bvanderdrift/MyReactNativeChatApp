import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
	usernameInputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10
	},
	usernameLabel: {
		flex: 1
	},
	usernameInput: {
		flex: 3
	},
	loginButton: {
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#43A7DE',
		borderRadius: 4
	}
})

var texts = {
	loginNameInputLabel: "Username: ",
	loginNameInputPlaceHolder: "Please provide a username",
	loginButtonText: "Login!"
};

class LoginForm extends Component {
	render() {
		return (
			<View>
				<View style={styles.usernameInputContainer}>
					<Text style={styles.usernameLabel}>{texts.loginNameInputLabel}</Text>
					<TextInput  style={styles.usernameInput} placeholder={texts.loginNameInputPlaceHolder} />
				</View>
				<TouchableHighlight 
					style={styles.loginButton}
					onPress={this.props.onSendForm}
					underlayColor="#21536F">
					<Text>{texts.loginButtonText}</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

module.exports = LoginForm;
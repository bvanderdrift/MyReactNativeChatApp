import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	usernameInputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 30,
		paddingRight: 30
	},
	usernameLabel: {
		flex: 1
	},
	usernameInput: {
		flex: 4
	}
})

var texts = {
	loginNameInputLabel: "Username: ",
	loginNameInputPlaceHolder: "Please provide a username"
};

class LoginPage extends Component {
  render() {
    return (
    	<View style={styles.container}>
    		<View style={styles.usernameInputContainer}>
	    		<Text style={styles.usernameLabel}>{texts.loginNameInputLabel}</Text>
	    		<TextInput  style={styles.usernameInput} placeholder={texts.loginNameInputPlaceHolder} />
    		</View>
    	</View>
    );
  }
}

module.exports = LoginPage;
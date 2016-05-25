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
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	username: ""
	  };
	}
	render() {
		return (
			<View>
				<View style={styles.usernameInputContainer}>
					<Text style={styles.usernameLabel}>{texts.loginNameInputLabel}</Text>
					<TextInput 
						style={styles.usernameInput} 
						value={this.state.username}
						placeholder={texts.loginNameInputPlaceHolder}
						onChange={this.onInputTextChanged.bind(this)} />
				</View>
				<TouchableHighlight 
					style={styles.loginButton}
					onPress={this.fireSendForm.bind(this)}
					underlayColor="#21536F">
					<Text>{texts.loginButtonText}</Text>
				</TouchableHighlight>
				<Text>{this.props.feedbackMessage}</Text>
			</View>
		);
	}
	onInputTextChanged(event){
		this.setState({username: event.nativeEvent.text});
	}
	fireSendForm(){
		this.props.onSendForm(this.state.username);
	}
}

module.exports = LoginForm;
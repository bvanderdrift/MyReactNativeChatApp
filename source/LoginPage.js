import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

import ActivityLoader from './ActivityLoader/ActivityLoader';

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginLeft: 30,
		marginRight: 30
	},
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

class LoginPage extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	loggingIn: false
	  };
	}
	render() {
		return (
			<View style={styles.container}>
				{this.getFormOrActivityLoader()}
			</View>
		);
	}	
	getFormOrActivityLoader(){
		if(this.state.loggingIn){
			return (
				<ActivityLoader />
			);
		}else{
			return (
				<View>
					<View style={styles.usernameInputContainer}>
						<Text style={styles.usernameLabel}>{texts.loginNameInputLabel}</Text>
						<TextInput  style={styles.usernameInput} placeholder={texts.loginNameInputPlaceHolder} />
					</View>
					<TouchableHighlight 
						style={styles.loginButton}
						onPress={this.attemptLogin.bind(this)}
						underlayColor="#21536F">
						<Text>{texts.loginButtonText}</Text>
					</TouchableHighlight>
				</View>
			);
		}
	}
	attemptLogin(){
		this.setState({loggingIn: true});
	}
}

module.exports = LoginPage;
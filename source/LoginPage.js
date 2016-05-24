import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

import ActivityLoader from './ActivityLoader/ActivityLoader';
import LoginForm from './LoginForm';

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginLeft: 30,
		marginRight: 30
	}
});

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
				<LoginForm onSendForm={this.attemptLogin.bind(this)} />
			);
		}
	}
	attemptLogin(){
		this.setState({loggingIn: true});
	}
}

module.exports = LoginPage;
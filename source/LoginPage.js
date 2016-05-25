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
import ChatScreen from './ChatScreen';
import { ServerConnector } from './ServerConnector';

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
	  	loggingIn: false,
	  	feedbackMessage: ""
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
				<LoginForm 
					onSendForm={this.attemptLogin.bind(this)} 
					feedbackMessage={this.state.feedbackMessage}/>
			);
		}
	}
	attemptLogin(username){
		this.setState({loggingIn: true});

		var loginCallback = function(succes, error){
			if(succes) {
				this.props.navigator.push({
					name: "chatScreen",
					component: ChatScreen,
					username: username
				});
			}else{
				this.setState({
					feedbackMessage: error
				});
			}
		}

		ServerConnector.attemptLogin(username, loginCallback.bind(this));
	}
}

module.exports = LoginPage;
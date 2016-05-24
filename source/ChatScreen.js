import React, { Component } from 'react';
import {
	View,
	ListView,
	Text,
	TextInput,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginLeft: 10,
		marginRight: 0
	},
	header: {
		flex: 2,
		justifyContent: 'flex-end'
	},
	headerText: {
		fontSize: 30,
		marginBottom: 10
	},
	messages: {
		flex: 10
	},
	footer: {
		flex: 1,
		flexDirection: "row",
	},
	messageInput: {
		flex: 3
	},
	sendMessageButton: {
		flex: 1
	},
	seperator: {
		height: 1,
		backgroundColor: "grey",
		marginLeft: -10
	}
});

var stubbedMessages = [
	{
		sender: "Beer",
		message: "Hello World",
		id: 0
	},
	{
		sender: "Wine",
		message: "Who is world?",
		id: 1
	},
	{
		sender: "Beer",
		message: "Hello Wine",
		id: 2
	},
	{
		sender: "Wine",
		message: "That's Me!",
		id: 3
	}
];

class ChatScreen extends Component {
	constructor(props) {
		super(props);

		var messagesDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});

		this.state = {
			username: props.route.username,
			messageText: "",
			messagesSource: messagesDataSource.cloneWithRows(stubbedMessages)
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Welcome {this.state.username}!</Text>
				</View>

				<View style={styles.seperator} />
				
			    <ListView
			    	style={styles.messages}
					dataSource={this.state.messagesSource}
					renderRow={(messageObj) => <Text>{messageObj.sender}: {messageObj.message}</Text>}
			    />

				<View style={styles.seperator} />

				<View style={styles.footer}>
					<TextInput 
						placeholder="Input Message"
						value={this.state.messageText}
						style={styles.messageInput}
						onChange={this.handleMessageTextChanged.bind(this)}/>
					<TouchableHighlight 
						style={styles.sendMessageButton}
						onPress={this.handleSendPressed.bind(this)}>
						<Text>Send!</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
	handleMessageTextChanged(event){
		this.setState({messageText: event.nativeEvent.text});
	}
	handleSendPressed(){
		this.sendMessage(this.state.username, this.state.messageText);
		this.setState({messageText: ""});
	}
	sendMessage(sender, message) {
		var messageObj = makeMessage(sender, message);
		stubbedMessages.push(messageObj);
		this.setState({
			messagesSource: this.state.messagesSource.cloneWithRows(stubbedMessages)
		});
	}
}


var	makeMessage = function(sender, message){
	return {
		id: getUniqueMessageId(),
		sender: sender,
		message: message
	};
}

var getUniqueMessageId = function(){
	var id = 0;

	while(stubbedMessages.filter(mo => (mo.id == id)).length > 0){
		id++;
	};

	return id;
}

module.exports = ChatScreen;
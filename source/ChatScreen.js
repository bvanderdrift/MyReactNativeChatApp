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
			messageText: "",
			messages: messagesDataSource.cloneWithRows(stubbedMessages)
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Welcome {this.props.route.username}!</Text>
				</View>

				<View style={styles.seperator} />
				
			    <ListView
			    	style={styles.messages}
					dataSource={this.state.messages}
					renderRow={(messageObj) => <Text>{messageObj.sender}: {messageObj.message}</Text>}
			    />

				<View style={styles.seperator} />

				<View style={styles.footer}>
					<TextInput placeholder="Input Message" style={styles.messageInput} />
					<TouchableHighlight style={styles.sendMessageButton}>
						<Text>Send!</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

module.exports = ChatScreen;
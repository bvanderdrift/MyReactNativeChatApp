import './UserAgent';

import io from 'socket.io-client/socket.io';

export var ServerConnector = {
	messageListeners: [],
	init: function() {
		this.socket = io.connect('http://localhost:3000', {jsonp: false});

		this.socket.on("chat message", function(msgObj){
			fireMessageListeners(msgObj);			
		});
	},
	sendMessage: function(msg) {
		this.socket.emit("chat message", msg);
	},
	addMessageListener: function(listener) {
		this.messageListeners.push(listener);
	},
	attemptLogin: function(username, callback){
		this.socket.on("login_succes", function(){
			callback(true, "");
		});
		this.socket.on("login_failed", function(error){
			callback(false, error);
		});

		console.log("Attempting Login");
		this.socket.emit("login", username);
	}
}

var fireMessageListeners = function(msgObj){
	console.log("Firing message listeners!");
	console.log(ServerConnector.messageListeners);

	for (var i = ServerConnector.messageListeners.length - 1; i >= 0; i--) {
		ServerConnector.messageListeners[i](msgObj);
	}
}
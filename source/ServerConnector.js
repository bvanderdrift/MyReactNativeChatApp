import './UserAgent';

import io from 'socket.io-client/socket.io';

export var ServerConnector = {
	messageListeners: [],
	init: function() {
		this.socket = io.connect('http://localhost:3000', {jsonp: false});

		this.socket.on("chat message", function(msg){
			console.log("Received Message! (" + msg + ")");
			fireMessageListeners(msg);			
		});
	},
	sendMessage: function(messageObject) {
		this.socket.emit("chat message", messageObject.message);
	},
	addMessageListener: function(listener) {
		this.messageListeners.push(listener);
	},

}

var fireMessageListeners = function(msg){
	console.log("Firing message listeners!");
	console.log(ServerConnector.messageListeners);

	for (var i = ServerConnector.messageListeners.length - 1; i >= 0; i--) {
		ServerConnector.messageListeners[i](msg);
	}
}
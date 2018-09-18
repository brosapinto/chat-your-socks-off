const io = require("socket.io-client");
const socket = io.connect("http://localhost:3001");

function registerHandler(onMessage) {
  socket.on("message", onMessage);
}

function unregisterHandler() {
  socket.off("message");
}

socket.on("error", err => {
  console.error("received socket error:");
  console.error(err);
});

function register(name, cb) {
  socket.emit("register", name, cb);
}

function join(chatroomName, cb) {
  socket.emit("join", chatroomName, cb);
}

function leave(chatroomName, cb) {
  socket.emit("leave", chatroomName, cb);
}

function message(chatroomName, message, cb) {
  socket.emit("message", { chatroomName, message }, cb);
}

function getChatrooms(cb) {
  socket.emit("chatrooms", null, cb);
}

function getAvailableUsers(cb) {
  socket.emit("availableUsers", null, cb);
}

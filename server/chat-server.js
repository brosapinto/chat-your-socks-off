const server = require("http").createServer();
const io = require("socket.io")(server);

let users = {};

io.on("connection", client => {
  console.log("client connected");

  client.on("register", (username, callback) => {
    if (users.hasOwnProperty(username)) {
      return callback({ status: "USER_EXISTS" });
    }

    users[username] = client.id;
    callback({ status: "OK", userId: client.id });
  });

  client.on("message", ({ user, message }, callback) => {
    if (!users.hasOwnProperty(user)) {
      return callback({ status: "USER_DOES_NOT_EXIST" });
    }

    io.emit("message", { user, message, timestamp: Date.now() });
    callback({ status: "OK", userId: client.id });
  });

  client.on("disconnect", () => {
    for (username in users) {
      if (users[username] === client.id) {
        delete users[username];
      }
    }
  });

  client.on("error", err => {
    console.error(`received error from client: ${client.id}`);
    console.error(err);
  });
});

server.listen(3001, err => {
  if (err) throw err;
  console.log("listening on port 3001");
});

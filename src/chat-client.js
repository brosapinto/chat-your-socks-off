import io from "socket.io-client";

export default function(url) {
  const socket = io.connect(url);

  return {
    registerUser: user =>
      new Promise((res, rej) => {
        socket.emit("register", user, resp => {
          if (resp.status === "OK") {
            res({ username: user });
          } else {
            rej(resp);
          }
        });
      }),

    sendMessage: (user, message) =>
      new Promise((res, rej) => {
        socket.emit("message", { user, message }, resp => {
          if (resp.status === "OK") {
            res();
          } else {
            rej(resp);
          }
        });
      }),

    onMessage: callback => socket.on("message", callback)
  };
}

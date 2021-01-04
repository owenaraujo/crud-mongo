import http from "http";

import socketio from "socket.io";
import app from "./config";

const server = http.createServer(app);
const io = socketio(server);
io.on("connection", (socket) => {
  console.log("conn");
});
export default server;

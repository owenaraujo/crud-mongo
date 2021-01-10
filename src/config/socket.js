import http from "http";

import socketio from "socket.io";
import app from "./config";

const server = http.createServer(app);
const io = socketio(server);
io.on("connection", (socket) => {
  console.log('conectado', socket.id);
  socket.on('chat:Mensaje', (data)=>{
    io.sockets.emit('chat:Mensaje', data)
  })
  socket.on('escribiendo',(data)=>{
    socket.broadcast.emit('escribiendo',data)
  })
});
export default server;

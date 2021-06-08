import app from "./config/config";
import ip from 'my-local-ip'

import "./database";
import server from "./config/socket";
server.listen(app.get("port"));

console.log("server in ",`${ip()}:${app.get("port")}`);

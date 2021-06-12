import app from "./config/config";

import "./database";
import server from "./config/socket";
server.listen(app.get("port"));

console.log("server in ",`${app.get('ip')}:${app.get("port")}`);

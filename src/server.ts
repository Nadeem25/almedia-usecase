import http from "http";
import App from "./app";
import { DatabaseConnection } from "./config/database";

const PORT = 8080
const HOST = "http://localhost"

const application = new App().init();
const server = http.createServer(application);

const listen = () => {
    server.listen(PORT, () => {
        console.log(`Server is running ${HOST} at port:${PORT}`);
    })
}

/*
 * Start the server and connect to the database
 */
export const startServer = async () => {
    try {
        listen();
        await DatabaseConnection.initialize();
        console.log(`[Server][start] Database connected successfully`);   
    } catch (error) {
        console.log(`[Server][start] error: ${error}`);
    }
}


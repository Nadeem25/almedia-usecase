import http from "http";
import App from "./app";
import { AppDataSource } from "./config/database";
import { executeOfferJob } from "./job/OfferJob";
import { Application } from "express";
import { registerProviderFactories } from "./boostrap/ProviderBoostrap";

const PORT = 8080
const HOST = "http://localhost"

const application : Application = new App().init();
const server = http.createServer(application);

registerProviderFactories();

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
        // Initialize Database Connection
        await AppDataSource.initialize();
        // Execute the Offer Processing Job
        executeOfferJob();
        console.log(`[Server][start] Database connected successfully`);   
    } catch (error) {
        console.log(`[Server][start] error: ${error}`);
    }
}


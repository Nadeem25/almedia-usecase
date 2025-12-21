import http from "http";
import App from "./app";
import { container } from "./container/inversify.config";
import { AppDataSource } from "./config/database";
import { Application } from "express";
import { registerProviders } from "./boostrap/ProviderBoostrap";
import { TYPES } from "./container/types";
import { Job } from "./job/OfferJob";

const PORT = 8080
const HOST = "http://localhost"

const application: Application = new App().init();
const server = http.createServer(application);

registerProviders(container);

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
        const job = container.get<Job>(TYPES.Job);
        await job.executeJOb();
        console.log(`[Server][start] Database connected successfully`);
    } catch (error) {
        console.log(`[Server][start] error: ${error}`);
    }
}


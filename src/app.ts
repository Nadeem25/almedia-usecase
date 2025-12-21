import express from "express";
import RouterBinder from "./routers/ProviderRoute";
import cors, { CorsOptions } from "cors";
import { corsOptions } from "./config/security.config";

export default class App {

    
    initRoutes(app: any) {
        app.use('/api/v1', RouterBinder.bindRoutes())
        console.log(`###### Router Initiated ###########`);
    }

    initCors(app: any) {
        app.use(cors(corsOptions));
        console.log(`###### CORS Initiated ###########`);
    }

    init() {
        const app = express();
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
        this.initCors(app);
        this.initRoutes(app);

        return app;
    }
}
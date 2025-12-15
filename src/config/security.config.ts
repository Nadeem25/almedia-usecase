import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
        origin: [
            "http://localhost:8080",
        ],
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: false,
    };
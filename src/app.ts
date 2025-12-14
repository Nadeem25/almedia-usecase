import express from "express";

export default class App {
    init() {
        const app = express();
        return app;
    }
}
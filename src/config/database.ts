import "reflect-metadata";
import { DataSource } from "typeorm";
import { Offer } from "../entities/Offer";
import { Provider } from "../entities/Provider";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "almedia",
    synchronize: true,
    logging: false,
    entities: [Provider, Offer],
});

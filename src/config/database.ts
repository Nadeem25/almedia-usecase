import "reflect-metadata";
import { DataSource } from "typeorm";
import { Offer } from "../entities/offers.entity";
import { Provider } from "../entities/providers.entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "almedia",
    synchronize: true,
    logging: false,
    entities: [Offer, Provider],
});

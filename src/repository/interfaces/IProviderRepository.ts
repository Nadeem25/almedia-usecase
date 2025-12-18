import { IProvider } from "../../entities/interfaces/IProvider";

export interface IProviderRepository {
    findActiveProviders(): Promise<IProvider[]>;
}
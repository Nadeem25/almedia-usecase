import { IProvider } from "../../entities/interfaces/provider.interface";

interface IProviderRepository {
    findActiveProviders(): Promise<IProvider[]>;
}
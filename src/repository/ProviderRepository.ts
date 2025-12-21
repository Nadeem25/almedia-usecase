import { AppDataSource } from "../config/database";
import { IProvider } from "../entities/interfaces/IProvider";
import { Provider } from "../entities/Provider";
import { IProviderRepository } from "./interfaces/IProviderRepository";

export class ProviderRepository implements IProviderRepository {
    private provider = AppDataSource.getRepository("provider");

    /**
    * Fetch the active offers providers from the Database
    */
    async findActiveProviders(): Promise<IProvider[]> {
        try {
            const activeProviders = await this.provider.find({ where: { isActive: true } });
            console.log(`[ProviderRepository][findActiveProviders] active providers: ${JSON.stringify(activeProviders)}`);
            return activeProviders as IProvider[];
        } catch (error) {
            console.error(`[ProviderRepository][findActiveProviders] error while fetching active providers: ${error}`);
            throw new Error(`Error fetching active providers: ${error}`);
        }
    }
}
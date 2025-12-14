import { AppDataSource } from "../config/database";
import { Provider } from "../entities/providers.entity";

export class ProviderRepository {
    private provider = AppDataSource.getRepository(Provider);

    async findActiveProviders(): Promise<Provider[]> {
        try {
            const activeProviders = await this.provider.find({ where: { isActive: true } });
            console.log(`[ProviderRepository][findActiveProviders] active providers: ${JSON.stringify(activeProviders)}`);
            return activeProviders;
        } catch (error) {
            console.error(`[ProviderRepository][findActiveProviders] error while fetching active providers: ${error}`);
            throw new Error(`Error fetching active providers: ${error}`);
        }
    }
}
import { IProvider } from "../entities/interfaces/provider.interface";
import { Provider } from "../entities/provider.entity";
import { IProviderAdapter } from "./interfaces/provider-adapter.interface";
import { OfferProviderA } from "./provider-a";
import { OfferProviderB } from "./provider-b";

export class ProviderFactory {
    private static providersMap: Record<string, new () => IProviderAdapter> = {
        "PROVIDER_A": OfferProviderA,
        "PROVIDER_B": OfferProviderB
    }

    /**
     * Create an instance of the provider adapter based on the provider code
     * @param provider The provider entity
     * @returns An instance of the corresponding provider adapter
     */
    static createProvider(provider: IProvider): IProviderAdapter{
            const ProviderClass = this.providersMap[provider.code];
            if (!ProviderClass) {
                throw new Error(`No provider found for code: ${provider.code}`);
            }
            return new ProviderClass();
    }
}
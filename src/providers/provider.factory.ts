import { Provider } from "../entities/providers.entity";
import { IOfferProvider } from "./interfaces/offer-provider.interface";
import { OfferProviderA } from "./provider-a";
import { OfferProviderB } from "./provider-b";

export class ProviderFactory {
    private static providersMap: Record<string, new () => IOfferProvider> = {
        "PROVIDER_A": OfferProviderA,
        "PROVIDER_B": OfferProviderB
    }

    static createProvider(provider: Provider): IOfferProvider | null {
            const ProviderClass = this.providersMap[provider.code];
            if (!ProviderClass) {
                throw new Error(`No provider found for code: ${provider.code}`);
            }
            return new ProviderClass();
    }
}
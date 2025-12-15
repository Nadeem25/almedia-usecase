import { Offer } from "../entities/offers.entity";
import { IOfferProvider } from "../providers/interfaces/offer-provider.interface";
import { ProviderFactory } from "../providers/provider.factory";
import { ProviderRepository } from "../repository/provider.repository";
import { fetchOfferProviderData } from "../services/http.service";

export const executeOfferJob = async () => {
    const providerRepo = new ProviderRepository();

    try {
        const offerProviders = await providerRepo.findActiveProviders();
        for (const offerProvider of offerProviders) {
            const provider: IOfferProvider = ProviderFactory.createProvider(offerProvider);
            console.log(`[OfferJob][executeOfferJob] Initialized provider: ${provider?.providerCode}`);
            const offerProviderData = await fetchOfferProviderData(offerProvider.config);
            const offers = provider.transform(offerProviderData.data);
            console.log(`[OfferJob][executeOfferJob] Transformed offers: ${JSON.stringify(offers)}`);
        }
    } catch (error) {
        console.error(`[OfferJob][executeOfferJob] error while executing offer job: ${error}`);
    }

}
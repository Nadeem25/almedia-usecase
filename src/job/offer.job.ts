import { IProvider } from "../entities/interfaces/provider.interface";
import { IProviderAdapter } from "../providers/interfaces/provider-adapter.interface";
import { ProviderFactory } from "../providers/provider.factory";
import { OfferRepository } from "../repository/offer.repository";
import { ProviderRepository } from "../repository/provider.repository";
import { fetchOfferProviderData } from "../services/http.service";
import { validateOffer } from "../services/validator.service";


export const providerProcessor = async (offerProvider: IProvider, offerRepository: OfferRepository): Promise<void> => {

    try {
        const providerInstance: IProviderAdapter = ProviderFactory.createProvider(offerProvider);
        const offerProviderData = await fetchOfferProviderData(offerProvider);
        console.info(`[OfferJob][providerProcessor][${offerProvider.code}] processing started.........`);
        const offers = providerInstance.transform(offerProviderData.data);
        console.log(`[OfferJob][executeOfferJob] [${offerProvider.code}] Data Transformed offers: ${JSON.stringify(offers)}`);
        for (const offer of offers) {
            const validationError = validateOffer(offer);
            if (validationError.length > 0) {
                console.warn(`[OfferJob][executeOfferJob] Validation failed for offer ${offer.externalOfferId}: ${validationError.join(", ")}`);
                continue
            }
            console.info(`[OfferJob][executeOfferJob] [${offerProvider.code}] Data Validated for offer ID: ${offer.externalOfferId}, proceeding to upsert.`);
            await offerRepository.upsertOffer(offer);
            console.info(`[OfferJob][executeOfferJob] [${offerProvider.code}] Offer upserted successfully for offer ID: ${offer.externalOfferId}`);
            console.info(`[OfferJob][providerProcessor][${offerProvider.code}] processing completed.`);
        }
    } catch (error) {
        console.error(`[OfferJob][providerProcessor][${offerProvider.code}] error: ${error}`);
    }
}



export const executeOfferJob = async () => {
    const providerRepository = new ProviderRepository();
    const offerRepository = new OfferRepository();
    try {
        const offerProviderList = await providerRepository.findActiveProviders();
        await Promise.allSettled(
            offerProviderList.map(async (offerProvider) => {
                await providerProcessor(offerProvider, offerRepository);
            }));
    } catch (error) {
        console.error(`[OfferJob][executeOfferJob] error while executing offer job: ${error}`);
    }

}
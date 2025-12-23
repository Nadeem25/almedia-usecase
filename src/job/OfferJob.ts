import { IProvider } from "../entities/interfaces/IProvider";
import { IProviderFactory } from "../services/interfaces/IProviderFactory";
import { IProviderTranformer } from "../services/interfaces/IProviderTranformer";
import { ProviderFactoryRegistery } from "../services/providers/registery/ProviderFactoryRegistery";
import { OfferRepository } from "../repository/OfferRepository";
import { ProviderRepository } from "../repository/ProviderRepository";
import { inject, injectable } from "inversify";
import { TYPES } from "../container/types";
import { IOfferRepository } from "../repository/interfaces/IOfferRepository";
import { IHttpService } from "../services/interfaces/IHttpService";
import { IValidator } from "../services/interfaces/IValidator";

@injectable()
export class Job {

    constructor(
        @inject(TYPES.OfferRepository) private offerRepository: IOfferRepository,
        @inject(TYPES.ProviderRepository) private providerRepository: ProviderRepository,
        @inject(TYPES.ProviderFactoryRegistry) private providerFactoryRegistery: ProviderFactoryRegistery,
        @inject(TYPES.HttpService) private httpService: IHttpService,
        @inject(TYPES.ValidatorService) private validator: IValidator
    ) { }


    /** 
    * Main Job Executor to process offers from active providers
    */
    async executeJOb(): Promise<void> {
        try {
            const providerList = await this.providerRepository.findActiveProviders();
            await Promise.allSettled(
                providerList.map(async (provider) => {
                    await this.providerProcessor(provider);
                }));
        } catch (error) {
            console.error(`[OfferJob][executeOfferJob] error while executing offer job: ${error}`);
        }

    }


    async providerProcessor(provider: IProvider): Promise<void> {

        try {
            // Step 1: Fetch Offer Data from Provider API
            const offerProviderData = await this.httpService.fetchProviderOffers(provider);
            console.info(`[OfferJob][providerProcessor][${provider.code}] processing started.........`);

            // Step 2: Transform the offers data
            const providerFactoryInstance: IProviderFactory = this.providerFactoryRegistery.getProviderFactory(provider.code)
            const transformer: IProviderTranformer = providerFactoryInstance.createTransformer()
            const offers = transformer.transform(offerProviderData.data);
            console.log(`[OfferJob][executeOfferJob] [${provider.code}] Data Transformed offers: ${JSON.stringify(offers)}`);
            for (const offer of offers) {
                // Step 4: Validate each offer data of the provider
                const validationError = this.validator.validateOffer(offer);
                if (validationError.length > 0) {
                    console.warn(`[OfferJob][executeOfferJob][${provider.code}] Validation failed for offer Id ${offer.externalOfferId} due to: ${validationError.join(", ")}`);
                    continue
                }
                console.info(`[OfferJob][executeOfferJob] [${provider.code}] Data Validated for offer ID: ${offer.externalOfferId}, proceeding to upsert.`);

                // Step 5: Insert or Update each offer into the Database.
                await this.offerRepository.upsertOffer(offer);
                console.info(`[OfferJob][executeOfferJob] [${provider.code}] Offer upserted successfully for offer ID: ${offer.externalOfferId}`);
                console.info(`[OfferJob][providerProcessor][${provider.code}] processing completed.`);
            }
        } catch (error) {
            console.error(`[OfferJob][providerProcessor][${provider.code}] ${error}`);
        }
    }
}
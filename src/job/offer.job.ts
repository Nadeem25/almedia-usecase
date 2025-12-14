import { ProviderRepository } from "../repository/provider.repository";

export const executeOfferJob = async () => {
    const providerRepo = new ProviderRepository();

    try {
        /**
        * Fetch the offers providers from the Database
        */
        const activeProviders = await providerRepo.findActiveProviders();

    } catch (error) {
        console.error(`[OfferJob][executeOfferJob] error while executing offer job: ${error}`);
    }


}
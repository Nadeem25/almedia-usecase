import { AppDataSource } from "../config/database";
import { IOffer } from "../entities/interfaces/offer.interface";
import { Offer } from "../entities/offer.entity";
import { IOfferRepository } from "./interfaces/offer.repository.interface";

export class OfferRepository implements IOfferRepository {
    private offer = AppDataSource.getRepository("Offer");

    /**
    * Save or Update Offers into the Database
    */
    async upsertOffer(offer: IOffer): Promise<void> {
        try {
            const result = await this.offer.
                createQueryBuilder()
                .insert()
                .into(Offer)
                .values({
                    name: offer.name,
                    slug: offer.slug,
                    description: offer.description,
                    requirements: offer.requirements,
                    thumbnail: offer.thumbnail,
                    isDesktop: offer.isDesktop,
                    isAndroid: offer.isAndroid,
                    isIos: offer.isIos,
                    offerUrlTemplate: offer.offerUrlTemplate,
                    providerName: offer.providerName,
                    externalOfferId: offer.externalOfferId,
                })
                .orUpdate(
                    [
                        "name",
                        "slug",
                        "description",
                        "requirements",
                        "thumbnail",
                        "is_desktop",
                        "is_android",
                        "is_ios",
                        "offer_url_template",
                    ],
                    ["provider_name", "external_offer_id"]
                )
                .updateEntity(false)
                .execute();
            console.log(`[ProviderRepository][saveOffer] Offer saved successfully: ${JSON.stringify(result)}`);
        } catch (error) {
            console.error(`[ProviderRepository][saveOffer] error while saving offer: ${error}`);
            throw new Error(`Error saving offer: ${error}`);
        }
    }

}
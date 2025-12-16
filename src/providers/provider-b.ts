import { IOffer } from "../entities/interfaces/offer.interface";
import { Offer } from "../entities/offer.entity";
import { generateSlug } from "../utility/slug.util";
import { IProviderAdapter } from "./interfaces/provider-adapter.interface";

export class OfferProviderB implements IProviderAdapter {

    readonly providerCode: string = "PROVIDER_B";

    transform(data: any): IOffer[]  {
        try {
            return Object.values(data).map((entry: any) => {
                const o = entry.Offer;
                const os = entry.OS;

                const offer = new Offer();

                offer.externalOfferId = String(o.campaign_id);
                offer.name = o.name;
                offer.description = o.description;
                offer.requirements = o.instructions;
                offer.thumbnail = o.icon;
                offer.offerUrlTemplate = o.tracking_url;
                offer.providerName = this.providerCode;

                offer.isDesktop = os.web ? 1 : 0;
                offer.isIos = os.ios ? 1 : 0;
                offer.isAndroid = os.android ? 1 : 0;

                offer.slug = generateSlug(
                    offer.name,
                    offer.providerName,
                    offer.externalOfferId
                );

                return offer;
            });
        } catch (error) {
            console.error("Error transforming offer data:", error);
            return [];
        }
    }
}
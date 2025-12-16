import { off } from "node:cluster";
import { IOffer } from "../entities/interfaces/offer.interface";
import { IProviderAdapter } from "./interfaces/provider-adapter.interface";
import { generateSlug } from "../utility/slug.util";
import { Offer } from "../entities/offer.entity";
import { log } from "node:console";

export class OfferProviderA implements IProviderAdapter {

    readonly providerCode: string = "PROVIDER_A";

    /**
     * Transform the raw data fetched from the provider API into IOffer entities
     */
    transform(data: any): IOffer[] {
        try {
            return data?.response?.offers?.map((offerData: any) => {
                const offer = new Offer();

                offer.externalOfferId = String(offerData?.offer_id);
                offer.name = offerData?.offer_name;
                offer.description = offerData?.offer_desc;
                offer.requirements = offerData?.call_to_action;
                offer.thumbnail = offerData?.image_url;
                offer.offerUrlTemplate = offerData?.offer_url;
                offer.providerName = this.providerCode;

                offer.isDesktop = offerData?.platform === "desktop" ? 1 : 0;
                offer.isIos = offerData?.device === "iphone_ipad" ? 1 : 0;
                offer.isAndroid = offerData?.device !== "iphone_ipad" ? 1 : 0;

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
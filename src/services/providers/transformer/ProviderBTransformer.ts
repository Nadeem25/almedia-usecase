import { IOffer } from "../../../entities/interfaces/IOffer";
import { Offer } from "../../../entities/Offer";
import { generateSlug } from "../../../utility/slug.util";
import { IProviderTranformer } from "../../interfaces/IProviderTranformer";


export class ProviderBTransformer implements IProviderTranformer {
    readonly providerCode: string = "PROVIDER_B";   
    /**
    * Transform the raw data fetched from the provider API into IOffer entities
    */  
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
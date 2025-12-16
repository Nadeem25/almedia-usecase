import { IOffer } from "../../entities/interfaces/offer.interface";

export interface IOfferRepository {
    upsertOffer(offers: IOffer): Promise<void>;
}
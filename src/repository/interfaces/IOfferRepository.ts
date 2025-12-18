import { IOffer } from "../../entities/interfaces/IOffer";


export interface IOfferRepository {
    upsertOffer(offers: IOffer): Promise<void>;
}
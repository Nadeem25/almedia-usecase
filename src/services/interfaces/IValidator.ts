import { IOffer } from "../../entities/interfaces/IOffer";

export interface IValidator {
    validateOffer(offer: IOffer): string[]
}
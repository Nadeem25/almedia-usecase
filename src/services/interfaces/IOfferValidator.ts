import { IOffer } from "../../entities/interfaces/IOffer";

export interface IProviderValidator {
    validate(offer: IOffer): string[]
}
import { IOffer } from "../entities/interfaces/IOffer";

export function validateOffer(offer: IOffer): string[] {
  const errors: string[] = [];

  if (!offer.externalOfferId) errors.push("externalOfferId missing");
  if (!offer.name) errors.push("name missing");
  if (!offer.slug) errors.push("slug missing");
  if (!offer.thumbnail) errors.push("thumbnail missing");
  if (!offer.offerUrlTemplate) errors.push("offerUrlTemplate missing");
  if (!offer.providerName) errors.push("providerName missing");

  return errors;
}

export interface IOffer {
  id?: number; // optional for new offers before saving
  name: string;
  slug: string;
  description: string;
  requirements: string;
  thumbnail: string;
  isDesktop: number;
  isAndroid: number;
  isIos: number;
  offerUrlTemplate: string;
  providerName: string;
  externalOfferId: string;
}

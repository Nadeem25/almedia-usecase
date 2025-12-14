import { Entity, Column, PrimaryGeneratedColumn, Index } from "typeorm";
import { IOffer } from "./interfaces/IOffers";

@Entity("offers")
@Index(["providerName", "externalOfferId"], { unique: true })
export class Offer implements IOffer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "varchar", length: 255 })
  slug!: string;

  @Column({ type: "text" })
  description!: string;

  @Column({ type: "text" })
  requirements!: string;

  @Column({ type: "varchar", length: 255 })
  thumbnail!: string;

  @Column({ type: "tinyint", width: 1, default: 0, name: "is_desktop" })
  isDesktop!: number;

  @Column({ type: "tinyint", width: 1, default: 0, name: "is_android" })
  isAndroid!: number;

  @Column({ type: "tinyint", width: 1, default: 0, name: "is_ios" })
  isIos!: number;

  @Column({ type: "varchar", length: 256, name: "offer_url_template" })
  offerUrlTemplate!: string;

  @Column({ type: "varchar", length: 255, name: "provider_name" })
  providerName!: string;

  @Column({ type: "varchar", length: 255, name: "external_offer_id" })
  externalOfferId!: string;
}

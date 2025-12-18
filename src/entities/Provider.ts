import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IProvider } from "./interfaces/IProvider";

@Entity({ name: "provider" })
export class Provider implements IProvider{
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 100, unique: true })
  code!: string; // e.g. PROVIDER_A

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "boolean", default: true })
  isActive!: boolean;

  @Column({ type: "json", nullable: true })
  config!: Record<string, any>; // API keys, URLs, etc.
}

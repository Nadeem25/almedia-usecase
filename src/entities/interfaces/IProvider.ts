export interface IProvider {
  id: number;
  code: string;       // e.g. PROVIDER_A, PROVIDER_B
  name: string;
  isActive: boolean;
  config?: Record<string, any>;
}

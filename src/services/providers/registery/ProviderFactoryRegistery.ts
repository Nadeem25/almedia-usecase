import { injectable } from "inversify";
import { IProviderFactory } from "../../interfaces/IProviderFactory";
import { IProviderFactoryRegistery } from "../../interfaces/IProviderFactoryRegistery";

@injectable()
export class ProviderFactoryRegistery implements IProviderFactoryRegistery{
    private factories: Map<string, IProviderFactory> = new Map<string, IProviderFactory>();

    registerProviderFactory(factory: IProviderFactory, providerCode: string): void {
        if(this.factories.has(providerCode)) {
            throw new Error(`[ProviderFactoryRegistery][registerProviderFactory] Factory for provider code ${providerCode} is already registered.`);
        }
        this.factories.set(providerCode, factory);
        for (const [key, factory] of this.factories.entries()) {
            console.log(`[ProviderFactoryRegistery][registerProviderFactory]`, key, factory);
            
        }
        
    }

    getProviderFactory(providerCode: string): IProviderFactory {
        const factory = this.factories.get(providerCode);
         for (const [key, factory] of this.factories.entries()) {
            console.log(`[ProviderFactoryRegistery][getProviderFactory]`, key, factory);
            
        }
        if (!factory) {
            throw new Error(`[ProviderFactoryRegistery][getProviderFactory] No factory found for type ${providerCode}`);
        }
        return factory;
    }
}
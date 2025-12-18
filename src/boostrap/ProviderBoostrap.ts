import { ProviderAFactory } from '../providers/implementation/provider_a/ProviderAFactory';
import { ProviderBFactory } from '../providers/implementation/provider_b/ProviderBFactory';
import { ProviderFactoryRegistery } from '../providers/registery/ProviderFactoryRegistery';

export function registerProviderFactories() {
  ProviderFactoryRegistery.registerProviderFactory(new ProviderAFactory());
  ProviderFactoryRegistery.registerProviderFactory(new ProviderBFactory());
}

import { ProviderAFactory } from '../providers/implementation/factory/ProviderAFactory';
import { ProviderBFactory } from '../providers/implementation/factory/ProviderBFactory';
import { ProviderFactoryRegistery } from '../providers/registery/ProviderFactoryRegistery';

export function registerProviderFactories() {
  ProviderFactoryRegistery.registerProviderFactory(new ProviderAFactory());
  ProviderFactoryRegistery.registerProviderFactory(new ProviderBFactory());
}

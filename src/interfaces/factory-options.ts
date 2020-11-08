import { PropertyFactory } from '~/properties/property-factory';

export interface BuilderFactoryOptions {
	quiet?: boolean;
	propertyFactory?: PropertyFactory;
}

export interface ComponentFactoryOptions {
	quiet?: boolean;
}

export interface PropertyFactoryOptions {
	quiet?: boolean;
}

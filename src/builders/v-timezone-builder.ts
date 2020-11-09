import { BuilderFunction } from '~/builders/builder-function';
import { VTimezone } from '~/components/v-timezone';
import { COMPONENT, PROPERTY } from '~/constant';
import { CreateVTimezoneOptions } from '~/interfaces/create-component-options';
import { BuilderFunctionImpl } from '~/interfaces/impl';
import { builderSetProperty } from '~/internal-helper';

export class VTimezoneBuilder extends BuilderFunction implements BuilderFunctionImpl<VTimezone> {
	public type = COMPONENT.Timezone;

	public build(target: VTimezone, opts: CreateVTimezoneOptions): VTimezone {
		if (opts.lastModified) {
			const property = this.propertyFactory.getProperty(PROPERTY.LastModified);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.lastModified as any);
			}
		}
		if (opts.TZID) {
			const property = this.propertyFactory.getProperty(PROPERTY.TZID);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.TZID as any);
			}
		}
		if (opts.TZUrl) {
			const property = this.propertyFactory.getProperty(PROPERTY.TZUrl);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.TZUrl as any);
			}
		}
		return target;
	}
}

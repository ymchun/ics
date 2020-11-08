import { BuilderFunction } from '~/builders/builder-function';
import { VCalendar } from '~/components/v-calendar';
import { COMPONENT, PROPERTY } from '~/constant';
import { builderSetProperty } from '~/helper';
import { CreateVCalendarOptions } from '~/interfaces/create-component-options';
import { BuilderFunctionImpl } from '~/interfaces/impl';

export class VCalendarBuilder extends BuilderFunction implements BuilderFunctionImpl<VCalendar> {
	public type = COMPONENT.Calendar;

	public build(target: VCalendar, opts: CreateVCalendarOptions): VCalendar {
		if (opts.calScale) {
			const property = this.propertyFactory.getProperty(PROPERTY.CalScale);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.calScale as any);
			}
		}
		if (opts.extWRCalDesc) {
			const property = this.propertyFactory.getProperty(PROPERTY.Extended.WR.CalendarDesc);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.extWRCalDesc as any);
			}
		}
		if (opts.extWRCalName) {
			const property = this.propertyFactory.getProperty(PROPERTY.Extended.WR.CalendarName);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.extWRCalName as any);
			}
		}
		if (opts.extWRTimezone) {
			const property = this.propertyFactory.getProperty(PROPERTY.Extended.WR.Timezone);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.extWRTimezone as any);
			}
		}
		if (opts.method) {
			const property = this.propertyFactory.getProperty(PROPERTY.Method);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.method as any);
			}
		}
		if (opts.productId) {
			const property = this.propertyFactory.getProperty(PROPERTY.ProdId);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.productId as any);
			}
		}
		if (opts.version) {
			const property = this.propertyFactory.getProperty(PROPERTY.Version);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.version as any);
			}
		}
		return target;
	}
}

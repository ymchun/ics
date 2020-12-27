import { BuilderFunction } from '~/builders/builder-function';
import { VCalendar } from '~/components/v-calendar';
import { COMPONENT, PROPERTY } from '~/constant';
import { CreateVCalendarOptions } from '~/interfaces/create-component-options';
import { BuilderFunctionImpl } from '~/interfaces/impl';
import { builderSetProperty } from '~/internal-helper';

export class VCalendarBuilder extends BuilderFunction implements BuilderFunctionImpl<VCalendar> {
	public type = COMPONENT.Calendar;

	public build(target: VCalendar, opts: CreateVCalendarOptions): VCalendar {
		if (opts.calScale) {
			const property = this.propertyFactory.getProperty(PROPERTY.CalScale);

			if (property) {
				builderSetProperty(target, property, opts.calScale);
			}
		}
		if (opts.extWRCalDesc) {
			const property = this.propertyFactory.getProperty(PROPERTY.Extended.WR.CalendarDesc);

			if (property) {
				builderSetProperty(target, property, opts.extWRCalDesc);
			}
		}
		if (opts.extWRCalName) {
			const property = this.propertyFactory.getProperty(PROPERTY.Extended.WR.CalendarName);

			if (property) {
				builderSetProperty(target, property, opts.extWRCalName);
			}
		}
		if (opts.extWRTimezone) {
			const property = this.propertyFactory.getProperty(PROPERTY.Extended.WR.Timezone);

			if (property) {
				builderSetProperty(target, property, opts.extWRTimezone);
			}
		}
		if (opts.method) {
			const property = this.propertyFactory.getProperty(PROPERTY.Method);

			if (property) {
				builderSetProperty(target, property, opts.method);
			}
		}
		if (opts.productId) {
			const property = this.propertyFactory.getProperty(PROPERTY.ProdId);

			if (property) {
				builderSetProperty(target, property, opts.productId);
			}
		}
		if (opts.version) {
			const property = this.propertyFactory.getProperty(PROPERTY.Version);

			if (property) {
				builderSetProperty(target, property, opts.version);
			}
		}
		return target;
	}
}

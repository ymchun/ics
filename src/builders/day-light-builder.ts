import { BuilderFunction } from '~/builders/builder-function';
import { DayLight } from '~/components/day-light';
import { COMPONENT, PROPERTY } from '~/constant';
import { CreateDayLightOptions } from '~/interfaces/create-component-options';
import { BuilderFunctionImpl } from '~/interfaces/impl';
import { builderSetProperty } from '~/internal-helper';

export class DayLightBuilder extends BuilderFunction implements BuilderFunctionImpl<DayLight> {
	public type = COMPONENT.DayLight;

	public build(target: DayLight, opts: CreateDayLightOptions): DayLight {
		if (opts.dtStart) {
			const property = this.propertyFactory.getProperty(PROPERTY.DTStart);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.dtStart as any);
			}
		}
		if (opts.rrule) {
			const property = this.propertyFactory.getProperty(PROPERTY.RRule);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.rrule as any);
			}
		}
		if (opts.tzName) {
			const property = this.propertyFactory.getProperty(PROPERTY.TZName);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.tzName as any);
			}
		}
		if (opts.tzOffsetFrom) {
			const property = this.propertyFactory.getProperty(PROPERTY.TZOffsetFrom);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.tzOffsetFrom as any);
			}
		}
		if (opts.tzOffsetTo) {
			const property = this.propertyFactory.getProperty(PROPERTY.TZOffsetTo);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.tzOffsetTo as any);
			}
		}
		if (opts.comments && opts.comments.length > 0) {
			opts.comments.map((comment) => {
				const property = this.propertyFactory.getProperty(PROPERTY.Comment);

				if (property) {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					builderSetProperty(target, property, comment as any);
				}
			});
		}
		if (opts.rDates && opts.rDates.length > 0) {
			opts.rDates.map((rDate) => {
				const property = this.propertyFactory.getProperty(PROPERTY.RDate);

				if (property) {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					builderSetProperty(target, property, rDate as any);
				}
			});
		}
		return target;
	}
}

import { BuilderFunction } from '~/builders/builder-function';
import { Standard } from '~/components/standard';
import { COMPONENT, PROPERTY } from '~/constant';
import { CreateStandardOptions } from '~/interfaces/create-component-options';
import { BuilderFunctionImpl } from '~/interfaces/impl';
import { builderSetProperty } from '~/internal-helper';

export class StandardBuilder extends BuilderFunction implements BuilderFunctionImpl<Standard> {
	public type = COMPONENT.Standard;

	public build(target: Standard, opts: CreateStandardOptions): Standard {
		if (opts.dtStart) {
			const property = this.propertyFactory.getProperty(PROPERTY.DTStart);

			if (property) {
				builderSetProperty(target, property, opts.dtStart);
			}
		}
		if (opts.rrule) {
			const property = this.propertyFactory.getProperty(PROPERTY.RRule);

			if (property) {
				builderSetProperty(target, property, opts.rrule);
			}
		}
		if (opts.tzName) {
			const property = this.propertyFactory.getProperty(PROPERTY.TZName);

			if (property) {
				builderSetProperty(target, property, opts.tzName);
			}
		}
		if (opts.tzOffsetFrom) {
			const property = this.propertyFactory.getProperty(PROPERTY.TZOffsetFrom);

			if (property) {
				builderSetProperty(target, property, opts.tzOffsetFrom);
			}
		}
		if (opts.tzOffsetTo) {
			const property = this.propertyFactory.getProperty(PROPERTY.TZOffsetTo);

			if (property) {
				builderSetProperty(target, property, opts.tzOffsetTo);
			}
		}
		if (opts.comments && opts.comments.length > 0) {
			opts.comments.map((comment) => {
				const property = this.propertyFactory.getProperty(PROPERTY.Comment);

				if (property) {
					builderSetProperty(target, property, comment);
				}
			});
		}
		if (opts.rDates && opts.rDates.length > 0) {
			opts.rDates.map((rDate) => {
				const property = this.propertyFactory.getProperty(PROPERTY.RDate);

				if (property) {
					builderSetProperty(target, property, rDate);
				}
			});
		}
		return target;
	}
}

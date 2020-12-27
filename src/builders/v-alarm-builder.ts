import { BuilderFunction } from '~/builders/builder-function';
import { VAlarm } from '~/components/v-alarm';
import { COMPONENT, PROPERTY } from '~/constant';
import { CreateVAlarmOptions } from '~/interfaces/create-component-options';
import { BuilderFunctionImpl } from '~/interfaces/impl';
import { builderSetProperty } from '~/internal-helper';

export class VAlarmBuilder extends BuilderFunction implements BuilderFunctionImpl<VAlarm> {
	public type = COMPONENT.Alarm;

	public build(target: VAlarm, opts: CreateVAlarmOptions): VAlarm {
		if (opts.action) {
			const property = this.propertyFactory.getProperty(PROPERTY.Action);

			if (property) {
				builderSetProperty(target, property, opts.action);
			}
		}
		if (opts.description) {
			const property = this.propertyFactory.getProperty(PROPERTY.Description);

			if (property) {
				builderSetProperty(target, property, opts.description);
			}
		}
		if (opts.duration) {
			const property = this.propertyFactory.getProperty(PROPERTY.Duration);

			if (property) {
				builderSetProperty(target, property, opts.duration);
			}
		}
		if (opts.repeat) {
			const property = this.propertyFactory.getProperty(PROPERTY.Repeat);

			if (property) {
				builderSetProperty(target, property, opts.repeat);
			}
		}
		if (opts.summary) {
			const property = this.propertyFactory.getProperty(PROPERTY.Summary);

			if (property) {
				builderSetProperty(target, property, opts.summary);
			}
		}
		if (opts.trigger) {
			const property = this.propertyFactory.getProperty(PROPERTY.Trigger);

			if (property) {
				builderSetProperty(target, property, opts.trigger);
			}
		}
		if (opts.uid) {
			const property = this.propertyFactory.getProperty(PROPERTY.UID);

			if (property) {
				builderSetProperty(target, property, opts.uid);
			}
		}
		if (opts.attachments && opts.attachments.length > 0) {
			opts.attachments.map((attachment) => {
				const property = this.propertyFactory.getProperty(PROPERTY.Attach);

				if (property) {
					builderSetProperty(target, property, attachment);
				}
			});
		}
		if (opts.attendees && opts.attendees.length > 0) {
			opts.attendees.map((attendee) => {
				const property = this.propertyFactory.getProperty(PROPERTY.Attendee);

				if (property) {
					builderSetProperty(target, property, attendee);
				}
			});
		}
		return target;
	}
}

import { BuilderFunction } from '~/builders/builder-function';
import { VAlarm } from '~/components/v-alarm';
import { COMPONENT, PROPERTY } from '~/constant';
import { builderSetProperty } from '~/helper';
import { CreateVAlarmOptions } from '~/interfaces/create-component-options';
import { BuilderFunctionImpl } from '~/interfaces/impl';

export class VAlarmBuilder extends BuilderFunction implements BuilderFunctionImpl<VAlarm> {
	public type = COMPONENT.Alarm;

	public build(target: VAlarm, opts: CreateVAlarmOptions): VAlarm {
		if (opts.action) {
			const property = this.propertyFactory.getProperty(PROPERTY.Action);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.action as any);
			}
		}
		if (opts.description) {
			const property = this.propertyFactory.getProperty(PROPERTY.Description);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.description as any);
			}
		}
		if (opts.duration) {
			const property = this.propertyFactory.getProperty(PROPERTY.Duration);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.duration as any);
			}
		}
		if (opts.repeat) {
			const property = this.propertyFactory.getProperty(PROPERTY.Repeat);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.repeat as any);
			}
		}
		if (opts.summary) {
			const property = this.propertyFactory.getProperty(PROPERTY.Summary);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.summary as any);
			}
		}
		if (opts.trigger) {
			const property = this.propertyFactory.getProperty(PROPERTY.Trigger);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.trigger as any);
			}
		}
		if (opts.uid) {
			const property = this.propertyFactory.getProperty(PROPERTY.UID);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.uid as any);
			}
		}
		if (opts.attachments && opts.attachments.length > 0) {
			opts.attachments.map((attachment) => {
				const property = this.propertyFactory.getProperty(PROPERTY.Attach);

				if (property) {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					builderSetProperty(target, property, attachment as any);
				}
			});
		}
		if (opts.attendees && opts.attendees.length > 0) {
			opts.attendees.map((attendee) => {
				const property = this.propertyFactory.getProperty(PROPERTY.Attendee);

				if (property) {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					builderSetProperty(target, property, attendee as any);
				}
			});
		}
		return target;
	}
}

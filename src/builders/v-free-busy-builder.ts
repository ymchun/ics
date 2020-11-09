import { BuilderFunction } from '~/builders/builder-function';
import { VFreeBusy } from '~/components/v-free-busy';
import { COMPONENT, PROPERTY } from '~/constant';
import { CreateVFreeBusyOptions } from '~/interfaces/create-component-options';
import { BuilderFunctionImpl } from '~/interfaces/impl';
import { builderSetProperty } from '~/internal-helper';

export class VFreeBusyBuilder extends BuilderFunction implements BuilderFunctionImpl<VFreeBusy> {
	public type = COMPONENT.FreeBusy;

	public build(target: VFreeBusy, opts: CreateVFreeBusyOptions): VFreeBusy {
		if (opts.contact) {
			const property = this.propertyFactory.getProperty(PROPERTY.Contact);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.contact as any);
			}
		}
		if (opts.dtEnd) {
			const property = this.propertyFactory.getProperty(PROPERTY.DTEnd);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.dtEnd as any);
			}
		}
		if (opts.dtStamp) {
			const property = this.propertyFactory.getProperty(PROPERTY.DTStamp);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.dtStamp as any);
			}
		}
		if (opts.dtStart) {
			const property = this.propertyFactory.getProperty(PROPERTY.DTStart);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.dtStart as any);
			}
		}
		if (opts.organizer) {
			const property = this.propertyFactory.getProperty(PROPERTY.Organizer);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.organizer as any);
			}
		}
		if (opts.uid) {
			const property = this.propertyFactory.getProperty(PROPERTY.UID);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.uid as any);
			}
		}
		if (opts.url) {
			const property = this.propertyFactory.getProperty(PROPERTY.Url);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.url as any);
			}
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
		if (opts.comments && opts.comments.length > 0) {
			opts.comments.map((comment) => {
				const property = this.propertyFactory.getProperty(PROPERTY.Comment);

				if (property) {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					builderSetProperty(target, property, comment as any);
				}
			});
		}
		if (opts.freeBusy && opts.freeBusy.length > 0) {
			opts.freeBusy.map((fb) => {
				const property = this.propertyFactory.getProperty(PROPERTY.FreeBusy);

				if (property) {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					builderSetProperty(target, property, fb as any);
				}
			});
		}
		return target;
	}
}

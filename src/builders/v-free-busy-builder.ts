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
				builderSetProperty(target, property, opts.contact);
			}
		}
		if (opts.dtEnd) {
			const property = this.propertyFactory.getProperty(PROPERTY.DTEnd);

			if (property) {
				builderSetProperty(target, property, opts.dtEnd);
			}
		}
		if (opts.dtStamp) {
			const property = this.propertyFactory.getProperty(PROPERTY.DTStamp);

			if (property) {
				builderSetProperty(target, property, opts.dtStamp);
			}
		}
		if (opts.dtStart) {
			const property = this.propertyFactory.getProperty(PROPERTY.DTStart);

			if (property) {
				builderSetProperty(target, property, opts.dtStart);
			}
		}
		if (opts.organizer) {
			const property = this.propertyFactory.getProperty(PROPERTY.Organizer);

			if (property) {
				builderSetProperty(target, property, opts.organizer);
			}
		}
		if (opts.uid) {
			const property = this.propertyFactory.getProperty(PROPERTY.UID);

			if (property) {
				builderSetProperty(target, property, opts.uid);
			}
		}
		if (opts.url) {
			const property = this.propertyFactory.getProperty(PROPERTY.Url);

			if (property) {
				builderSetProperty(target, property, opts.url);
			}
		}
		if (opts.attendees && opts.attendees.length > 0) {
			opts.attendees.map((attendee) => {
				const property = this.propertyFactory.getProperty(PROPERTY.Attendee);

				if (property) {
					builderSetProperty(target, property, attendee);
				}
			});
		}
		if (opts.comments && opts.comments.length > 0) {
			opts.comments.map((comment) => {
				const property = this.propertyFactory.getProperty(PROPERTY.Comment);

				if (property) {
					builderSetProperty(target, property, comment);
				}
			});
		}
		if (opts.freeBusy && opts.freeBusy.length > 0) {
			opts.freeBusy.map((fb) => {
				const property = this.propertyFactory.getProperty(PROPERTY.FreeBusy);

				if (property) {
					builderSetProperty(target, property, fb);
				}
			});
		}
		return target;
	}
}

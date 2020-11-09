import { BuilderFunction } from '~/builders/builder-function';
import { VEvent } from '~/components/v-event';
import { COMPONENT, PROPERTY } from '~/constant';
import { CreateVEventOptions } from '~/interfaces/create-component-options';
import { BuilderFunctionImpl } from '~/interfaces/impl';
import { builderSetProperty } from '~/internal-helper';

export class VEventBuilder extends BuilderFunction implements BuilderFunctionImpl<VEvent> {
	public type = COMPONENT.Event;

	public build(target: VEvent, opts: CreateVEventOptions): VEvent {
		if (opts.categories) {
			const property = this.propertyFactory.getProperty(PROPERTY.Categories);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.categories as any);
			}
		}
		if (opts.class) {
			const property = this.propertyFactory.getProperty(PROPERTY.Class);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.class as any);
			}
		}
		if (opts.created) {
			const property = this.propertyFactory.getProperty(PROPERTY.Created);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.created as any);
			}
		}
		if (opts.description) {
			const property = this.propertyFactory.getProperty(PROPERTY.Description);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.description as any);
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
		if (opts.duration) {
			const property = this.propertyFactory.getProperty(PROPERTY.Duration);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.duration as any);
			}
		}
		if (opts.geo) {
			const property = this.propertyFactory.getProperty(PROPERTY.Geo);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.geo as any);
			}
		}
		if (opts.lastModified) {
			const property = this.propertyFactory.getProperty(PROPERTY.LastModified);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.lastModified as any);
			}
		}
		if (opts.location) {
			const property = this.propertyFactory.getProperty(PROPERTY.Location);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.location as any);
			}
		}
		if (opts.organizer) {
			const property = this.propertyFactory.getProperty(PROPERTY.Organizer);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.organizer as any);
			}
		}
		if (opts.priority) {
			const property = this.propertyFactory.getProperty(PROPERTY.Priority);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.priority as any);
			}
		}
		if (opts.recurrenceId) {
			const property = this.propertyFactory.getProperty(PROPERTY.RecurrenceId);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.recurrenceId as any);
			}
		}
		if (opts.resources) {
			const property = this.propertyFactory.getProperty(PROPERTY.Resources);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.resources as any);
			}
		}
		if (opts.rrule) {
			const property = this.propertyFactory.getProperty(PROPERTY.RRule);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.rrule as any);
			}
		}
		if (opts.sequence) {
			const property = this.propertyFactory.getProperty(PROPERTY.Sequence);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.sequence as any);
			}
		}
		if (opts.status) {
			const property = this.propertyFactory.getProperty(PROPERTY.Status);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.status as any);
			}
		}
		if (opts.summary) {
			const property = this.propertyFactory.getProperty(PROPERTY.Summary);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.summary as any);
			}
		}
		if (opts.transp) {
			const property = this.propertyFactory.getProperty(PROPERTY.Transp);

			if (property) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				builderSetProperty(target, property, opts.transp as any);
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
		if (opts.comments && opts.comments.length > 0) {
			opts.comments.map((comment) => {
				const property = this.propertyFactory.getProperty(PROPERTY.Comment);

				if (property) {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					builderSetProperty(target, property, comment as any);
				}
			});
		}
		if (opts.contacts && opts.contacts.length > 0) {
			opts.contacts.map((contact) => {
				const property = this.propertyFactory.getProperty(PROPERTY.Contact);

				if (property) {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					builderSetProperty(target, property, contact as any);
				}
			});
		}
		if (opts.exDates && opts.exDates.length > 0) {
			opts.exDates.map((exDate) => {
				const property = this.propertyFactory.getProperty(PROPERTY.ExDate);

				if (property) {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					builderSetProperty(target, property, exDate as any);
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
		if (opts.relatedTo && opts.relatedTo.length > 0) {
			opts.relatedTo.map((rt) => {
				const property = this.propertyFactory.getProperty(PROPERTY.RelatedTo);

				if (property) {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					builderSetProperty(target, property, rt as any);
				}
			});
		}
		return target;
	}
}

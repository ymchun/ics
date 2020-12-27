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
				builderSetProperty(target, property, opts.categories);
			}
		}
		if (opts.class) {
			const property = this.propertyFactory.getProperty(PROPERTY.Class);

			if (property) {
				builderSetProperty(target, property, opts.class);
			}
		}
		if (opts.created) {
			const property = this.propertyFactory.getProperty(PROPERTY.Created);

			if (property) {
				builderSetProperty(target, property, opts.created);
			}
		}
		if (opts.description) {
			const property = this.propertyFactory.getProperty(PROPERTY.Description);

			if (property) {
				builderSetProperty(target, property, opts.description);
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
		if (opts.duration) {
			const property = this.propertyFactory.getProperty(PROPERTY.Duration);

			if (property) {
				builderSetProperty(target, property, opts.duration);
			}
		}
		if (opts.geo) {
			const property = this.propertyFactory.getProperty(PROPERTY.Geo);

			if (property) {
				builderSetProperty(target, property, opts.geo);
			}
		}
		if (opts.lastModified) {
			const property = this.propertyFactory.getProperty(PROPERTY.LastModified);

			if (property) {
				builderSetProperty(target, property, opts.lastModified);
			}
		}
		if (opts.location) {
			const property = this.propertyFactory.getProperty(PROPERTY.Location);

			if (property) {
				builderSetProperty(target, property, opts.location);
			}
		}
		if (opts.organizer) {
			const property = this.propertyFactory.getProperty(PROPERTY.Organizer);

			if (property) {
				builderSetProperty(target, property, opts.organizer);
			}
		}
		if (opts.priority) {
			const property = this.propertyFactory.getProperty(PROPERTY.Priority);

			if (property) {
				builderSetProperty(target, property, opts.priority);
			}
		}
		if (opts.recurrenceId) {
			const property = this.propertyFactory.getProperty(PROPERTY.RecurrenceId);

			if (property) {
				builderSetProperty(target, property, opts.recurrenceId);
			}
		}
		if (opts.resources) {
			const property = this.propertyFactory.getProperty(PROPERTY.Resources);

			if (property) {
				builderSetProperty(target, property, opts.resources);
			}
		}
		if (opts.rrule) {
			const property = this.propertyFactory.getProperty(PROPERTY.RRule);

			if (property) {
				builderSetProperty(target, property, opts.rrule);
			}
		}
		if (opts.sequence) {
			const property = this.propertyFactory.getProperty(PROPERTY.Sequence);

			if (property) {
				builderSetProperty(target, property, opts.sequence);
			}
		}
		if (opts.status) {
			const property = this.propertyFactory.getProperty(PROPERTY.Status);

			if (property) {
				builderSetProperty(target, property, opts.status);
			}
		}
		if (opts.summary) {
			const property = this.propertyFactory.getProperty(PROPERTY.Summary);

			if (property) {
				builderSetProperty(target, property, opts.summary);
			}
		}
		if (opts.transp) {
			const property = this.propertyFactory.getProperty(PROPERTY.Transp);

			if (property) {
				builderSetProperty(target, property, opts.transp);
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
		if (opts.comments && opts.comments.length > 0) {
			opts.comments.map((comment) => {
				const property = this.propertyFactory.getProperty(PROPERTY.Comment);

				if (property) {
					builderSetProperty(target, property, comment);
				}
			});
		}
		if (opts.contacts && opts.contacts.length > 0) {
			opts.contacts.map((contact) => {
				const property = this.propertyFactory.getProperty(PROPERTY.Contact);

				if (property) {
					builderSetProperty(target, property, contact);
				}
			});
		}
		if (opts.exDates && opts.exDates.length > 0) {
			opts.exDates.map((exDate) => {
				const property = this.propertyFactory.getProperty(PROPERTY.ExDate);

				if (property) {
					builderSetProperty(target, property, exDate);
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
		if (opts.relatedTo && opts.relatedTo.length > 0) {
			opts.relatedTo.map((rt) => {
				const property = this.propertyFactory.getProperty(PROPERTY.RelatedTo);

				if (property) {
					builderSetProperty(target, property, rt);
				}
			});
		}
		return target;
	}
}

import { Component } from '~/components/component';
import { VAlarm } from '~/components/v-alarm';
import { COMPONENT, PROPERTY } from '~/constant';
import { ComponentImpl } from '~/interfaces/component-impl';
import { ConvertToICS } from '~/interfaces/convert-to-ics';
import { Attachment } from '~/properties/attachment';
import { Attendee } from '~/properties/attendee';
import { Categories } from '~/properties/categories';
import { Class } from '~/properties/class';
import { Comment } from '~/properties/comment';
import { Contact } from '~/properties/contact';
import { Created } from '~/properties/created';
import { DateTimeEnd } from '~/properties/date-time-end';
import { DateTimeStamp } from '~/properties/date-time-stamp';
import { DateTimeStart } from '~/properties/date-time-start';
import { Description } from '~/properties/description';
import { Duration } from '~/properties/duration';
import { ExceptionDateTimes } from '~/properties/exception-date-times';
import { GeographicPosition } from '~/properties/geographic-position';
import { LastModified } from '~/properties/last-modified';
import { Location } from '~/properties/location';
import { Organizer } from '~/properties/organizer';
import { Priority } from '~/properties/priority';
import { Property } from '~/properties/property';
import { RecurrenceDateTimes } from '~/properties/recurrence-date-times';
import { RecurrenceId } from '~/properties/recurrence-id';
import { RelatedTo } from '~/properties/related-to';
import { Resources } from '~/properties/resources';
import { RRule } from '~/properties/rrule';
import { Sequence } from '~/properties/sequence';
import { Status } from '~/properties/status';
import { Summary } from '~/properties/summary';
import { TimeTransparency } from '~/properties/time-transparency';
import { UID } from '~/properties/uid';
import { Url } from '~/properties/url';

export class VEvent extends Component implements ComponentImpl {
	public type = COMPONENT.Event;

	// components
	public alarms!: VAlarm[];

	// properties

	// The following are REQUIRED
	// but MUST NOT occur more than once
	public dtStamp!: DateTimeStamp;
	public uid!: UID;

	// The following is REQUIRED if the component
	// appears in an iCalendar object that doesn't
	// specify the "METHOD" property; otherwise, it
	// is OPTIONAL; in any case, it MUST NOT occur
	// more than once.
	public dtStart!: DateTimeStart;

	// The following are OPTIONAL
	// but MUST NOT occur more than once
	public class!: Class;
	public created!: Created;
	public description!: Description;
	public geo!: GeographicPosition;
	public lastModified!: LastModified;
	public location!: Location;
	public organizer!: Organizer;
	public priority!: Priority;
	public recurrenceId!: RecurrenceId;
	public sequence!: Sequence;
	public status!: Status;
	public summary!: Summary;
	public transp!: TimeTransparency;
	public url!: Url;

	// The following is OPTIONAL
	// but SHOULD NOT occur more than once
	public rrule!: RRule;

	// Either 'dtend' or 'duration' MAY appear in
	// a 'eventprop', but 'dtend' and 'duration'
	// MUST NOT occur in the same 'eventprop'.
	public dtEnd!: DateTimeEnd;
	public duration!: Duration;

	// The following are OPTIONAL,
	// and MAY occur more than once.
	public attachments!: Attachment[];
	public attendees!: Attendee[];
	public categories!: Categories;
	public comments!: Comment[];
	public contacts!: Contact[];
	public exDates!: ExceptionDateTimes[];
	public rDates!: RecurrenceDateTimes[];
	public relatedTo!: RelatedTo[];
	public resources!: Resources;

	public setComponent(component: Component): void {
		switch (component.type) {
			case COMPONENT.Alarm:
				this.alarms = this.alarms || [];
				this.alarms.push(component as VAlarm);
				break;
		}
	}

	public setProperty(property: Property): void {
		switch (property.type) {
			case PROPERTY.DTStamp:
				this.dtStamp = property as DateTimeStamp;
				break;
			case PROPERTY.UID:
				this.uid = property as UID;
				break;
			case PROPERTY.DTStart:
				this.dtStart = property as DateTimeStart;
				break;
			case PROPERTY.Class:
				this.class = property as Class;
				break;
			case PROPERTY.Created:
				this.created = property as Created;
				break;
			case PROPERTY.Description:
				this.description = property as Description;
				break;
			case PROPERTY.Geo:
				this.geo = property as GeographicPosition;
				break;
			case PROPERTY.LastModified:
				this.lastModified = property as LastModified;
				break;
			case PROPERTY.Location:
				this.location = property as Location;
				break;
			case PROPERTY.Organizer:
				this.organizer = property as Organizer;
				break;
			case PROPERTY.Priority:
				this.priority = property as Priority;
				break;
			case PROPERTY.RecurrenceId:
				this.recurrenceId = property as RecurrenceId;
				break;
			case PROPERTY.Sequence:
				this.sequence = property as Sequence;
				break;
			case PROPERTY.Status:
				this.status = property as Status;
				break;
			case PROPERTY.Summary:
				this.summary = property as Summary;
				break;
			case PROPERTY.Transp:
				this.transp = property as TimeTransparency;
				break;
			case PROPERTY.Url:
				this.url = property as Url;
				break;
			case PROPERTY.RRule:
				this.rrule = property as RRule;
				break;
			case PROPERTY.DTEnd:
				this.dtEnd = property as DateTimeEnd;
				break;
			case PROPERTY.Duration:
				this.duration = property as Duration;
				break;
			case PROPERTY.Resources:
				this.resources = property as Resources;
				break;

			case PROPERTY.Attach:
				this.attachments = this.attachments || [];
				this.attachments.push(property as Attachment);
				break;
			case PROPERTY.Attendee:
				this.attendees = this.attendees || [];
				this.attendees.push(property as Attendee);
				break;
			case PROPERTY.Categories:
				this.categories = property as Categories;
				break;
			case PROPERTY.Comment:
				this.comments = this.comments || [];
				this.comments.push(property as Comment);
				break;
			case PROPERTY.Contact:
				this.contacts = this.contacts || [];
				this.contacts.push(property as Contact);
				break;
			case PROPERTY.ExDate:
				this.exDates = this.exDates || [];
				this.exDates.push(property as ExceptionDateTimes);
				break;
			case PROPERTY.RDate:
				this.rDates = this.rDates || [];
				this.rDates.push(property as RecurrenceDateTimes);
				break;
			case PROPERTY.RelatedTo:
				this.relatedTo = this.relatedTo || [];
				this.relatedTo.push(property as RelatedTo);
				break;
		}
	}

	public getICSTokens(): ConvertToICS {
		// result
		const payload: ConvertToICS = {
			children: [],
			type: this.type,
		};

		// push components

		if (this.alarms) {
			payload.children.push(...this.alarms.map((p) => p.getICSTokens()));
		}

		// push properties

		if (this.uid) {
			payload.children.push(this.uid.toString());
		}
		if (this.dtStamp) {
			payload.children.push(this.dtStamp.toString());
		}

		if (this.dtStart) {
			payload.children.push(this.dtStart.toString());
		}
		if (this.dtEnd) {
			payload.children.push(this.dtEnd.toString());
		}
		if (this.duration) {
			payload.children.push(this.duration.toString());
		}
		if (this.rrule) {
			payload.children.push(this.rrule.toString());
		}

		if (this.class) {
			payload.children.push(this.class.toString());
		}
		if (this.description) {
			payload.children.push(this.description.toString());
		}
		if (this.geo) {
			payload.children.push(this.geo.toString());
		}
		if (this.location) {
			payload.children.push(this.location.toString());
		}
		if (this.organizer) {
			payload.children.push(this.organizer.toString());
		}
		if (this.priority) {
			payload.children.push(this.priority.toString());
		}
		if (this.recurrenceId) {
			payload.children.push(this.recurrenceId.toString());
		}
		if (this.sequence) {
			payload.children.push(this.sequence.toString());
		}
		if (this.status) {
			payload.children.push(this.status.toString());
		}
		if (this.summary) {
			payload.children.push(this.summary.toString());
		}
		if (this.transp) {
			payload.children.push(this.transp.toString());
		}
		if (this.url) {
			payload.children.push(this.url.toString());
		}
		if (this.created) {
			payload.children.push(this.created.toString());
		}
		if (this.lastModified) {
			payload.children.push(this.lastModified.toString());
		}

		if (this.attachments) {
			payload.children.push(...this.attachments.map((p) => p.toString()));
		}
		if (this.attendees) {
			payload.children.push(...this.attendees.map((p) => p.toString()));
		}
		if (this.categories) {
			payload.children.push(this.categories.toString());
		}
		if (this.comments) {
			payload.children.push(...this.comments.map((p) => p.toString()));
		}
		if (this.contacts) {
			payload.children.push(...this.contacts.map((p) => p.toString()));
		}
		if (this.exDates) {
			payload.children.push(...this.exDates.map((p) => p.toString()));
		}
		if (this.rDates) {
			payload.children.push(...this.rDates.map((p) => p.toString()));
		}
		if (this.relatedTo) {
			payload.children.push(...this.relatedTo.map((p) => p.toString()));
		}
		if (this.resources) {
			payload.children.push(this.resources.toString());
		}

		return payload;
	}
}

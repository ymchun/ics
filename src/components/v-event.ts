import { Component } from '~/components/component';
import { VAlarm } from '~/components/v-alarm';
import { COMPONENT, PROPERTY } from '~/constant';
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

export class VEvent extends Component {
	public type = COMPONENT.Event;

	// components
	public alarms!: VAlarm[];

	// properties
	public attachments!: Attachment[];
	public attendees!: Attendee[];
	public categories!: Categories;
	public class!: Class;
	public comments!: Comment[];
	public contacts!: Contact[];
	public created!: Created;
	public description!: Description;
	public dtEnd!: DateTimeEnd;
	public dtStamp!: DateTimeStamp;
	public dtStart!: DateTimeStart;
	public duration!: Duration;
	public exDates!: ExceptionDateTimes[];
	public geo!: GeographicPosition;
	public lastModified!: LastModified;
	public location!: Location;
	public organizer!: Organizer;
	public priority!: Priority;
	public rDates!: RecurrenceDateTimes[];
	public recurrenceId!: RecurrenceId;
	public relatedTo!: RelatedTo[];
	public resources!: Resources;
	public rrule!: RRule;
	public sequence!: Sequence;
	public status!: Status;
	public summary!: Summary;
	public transp!: TimeTransparency;
	public uid!: UID;
	public url!: Url;

	public setComponent(component: Component): void {
		switch (component.type) {
		case COMPONENT.Alarm: this.alarms.push(component as VAlarm); break;
		}
	}

	public setProperty(property: Property): void {
		switch (property.type) {
		// The following are REQUIRED,
		// but MUST NOT occur more than once.
		case PROPERTY.DTStamp: this.dtStamp = property as DateTimeStamp; break;
		case PROPERTY.UID: this.uid = property as UID; break;

		// The following is REQUIRED if the component
		// appears in an iCalendar object that doesn't
		// specify the "METHOD" property; otherwise, it
		// is OPTIONAL; in any case, it MUST NOT occur
		// more than once.
		case PROPERTY.DTStart: this.dtStart = property as DateTimeStart; break;

		// The following are OPTIONAL,
		// but MUST NOT occur more than once.
		case PROPERTY.Class: this.class = property as Class; break;
		case PROPERTY.Created: this.created = property as Created; break;
		case PROPERTY.Description: this.description = property as Description; break;
		case PROPERTY.Geo: this.geo = property as GeographicPosition; break;
		case PROPERTY.LastModified: this.lastModified = property as LastModified; break;
		case PROPERTY.Location: this.location = property as Location; break;
		case PROPERTY.Organizer: this.organizer = property as Organizer; break;
		case PROPERTY.Priority: this.priority = property as Priority; break;
		case PROPERTY.RecurrenceId: this.recurrenceId = property as RecurrenceId; break;
		case PROPERTY.Sequence: this.sequence = property as Sequence; break;
		case PROPERTY.Status: this.status = property as Status; break;
		case PROPERTY.Summary: this.summary = property as Summary; break;
		case PROPERTY.Transp: this.transp = property as TimeTransparency; break;
		case PROPERTY.Url: this.url = property as Url; break;

		// The following is OPTIONAL,
		// but SHOULD NOT occur more than once.
		case PROPERTY.RRule: this.rrule = property as RRule; break;

		// Either 'dtend' or 'duration' MAY appear in
		// a 'eventprop', but 'dtend' and 'duration'
		// MUST NOT occur in the same 'eventprop'.
		case PROPERTY.DTEnd: this.dtEnd = property as DateTimeEnd; break;
		case PROPERTY.Duration: this.duration = property as Duration; break;

		// The following are OPTIONAL,
		// and MAY occur more than once.
		case PROPERTY.Attach:
			this.attachments = this.attachments || [];
			this.attachments.push(property as Attachment);
			break;
		case PROPERTY.Attendee:
			this.attendees = this.attendees || [];
			this.attendees.push(property as Attendee);
			break;
		case PROPERTY.Categories: this.categories = property as Categories; break;
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
		case PROPERTY.Resources: this.resources = property as Resources; break;
		}
	}

}

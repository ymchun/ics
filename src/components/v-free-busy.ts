import { Component } from '~/components/component';
import { COMPONENT, PROPERTY } from '~/constant';
import { Attendee } from '~/properties/attendee';
import { Comment } from '~/properties/comment';
import { Contact } from '~/properties/contact';
import { DateTimeEnd } from '~/properties/date-time-end';
import { DateTimeStamp } from '~/properties/date-time-stamp';
import { DateTimeStart } from '~/properties/date-time-start';
import { FreeBusy } from '~/properties/free-busy';
import { Organizer } from '~/properties/organizer';
import { Property } from '~/properties/property';
import { UID } from '~/properties/uid';
import { Url } from '~/properties/url';

export class VFreeBusy extends Component {
	public type = COMPONENT.FreeBusy;

	// properties
	public attendees!: Attendee[];
	public comments!: Comment[];
	public contact!: Contact;
	public dtEnd!: DateTimeEnd;
	public dtStamp!: DateTimeStamp;
	public dtStart!: DateTimeStart;
	public freeBusy!: FreeBusy[];
	public organizer!: Organizer;
	public uid!: UID;
	public url!: Url;

	public setProperty(property: Property): void {
		switch (property.type) {
		// The following are REQUIRED,
		// but MUST NOT occur more than once.
		case PROPERTY.DTStamp: this.dtStamp = property as DateTimeStamp; break;
		case PROPERTY.UID: this.uid = property as UID; break;

		// The following are OPTIONAL,
		// but MUST NOT occur more than once.
		case PROPERTY.Contact: this.contact = property as Contact; break;
		case PROPERTY.DTEnd: this.dtEnd = property as DateTimeEnd; break;
		case PROPERTY.DTStart: this.dtStart = property as DateTimeStart; break;
		case PROPERTY.Organizer: this.organizer = property as Organizer; break;
		case PROPERTY.Url: this.url = property as Url; break;

		// The following are OPTIONAL,
		// and MAY occur more than once.
		case PROPERTY.Attendee:
			this.attendees = this.attendees || [];
			this.attendees.push(property as Attendee);
			break;
		case PROPERTY.Comment:
			this.comments = this.comments || [];
			this.comments.push(property as Comment);
			break;
		case PROPERTY.FreeBusy:
			this.freeBusy = this.freeBusy || [];
			this.freeBusy.push(property as FreeBusy);
			break;
		}
	}

}

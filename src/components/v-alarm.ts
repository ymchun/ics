import { Component } from '~/components/component';
import { COMPONENT, PROPERTY } from '~/constant';
import { Action } from '~/properties/action';
import { Attachment } from '~/properties/attachment';
import { Attendee } from '~/properties/attendee';
import { Description } from '~/properties/description';
import { Duration } from '~/properties/duration';
import { Property } from '~/properties/property';
import { Repeat } from '~/properties/repeat';
import { Summary } from '~/properties/summary';
import { Trigger } from '~/properties/trigger';
import { UID } from '~/properties/uid';

export class VAlarm extends Component {
	public type = COMPONENT.Alarm;

	// properties

	// The following are REQUIRED in audio, display & email mode
	// but MUST NOT occur more than once
	public action!: Action;
	public trigger!: Trigger;
	public uid!: UID;

	// The following are REQUIRED in display & email mode
	// but MUST NOT occur more than once
	public description!: Description;

	// The following are REQUIRED in email mode
	// but MUST NOT occur more than once
	public summary!: Summary;

	// 'duration' and 'repeat' are both OPTIONAL
	// and MUST NOT occur more than once each
	// but if one occurs, so MUST the other
	public duration!: Duration;
	public repeat!: Repeat;

	// The following is REQUIRED in email mode
	// and MAY occur more than once
	public attendees!: Attendee[];

	// The following is OPTIONAL
	// but MUST NOT occur more than once in audio mode
	// and MAY occur more than once in email mode
	public attachments!: Attachment[];

	public setProperty(property: Property): void {
		switch (property.type) {
		case PROPERTY.Action: this.action = property as Action; break;
		case PROPERTY.Trigger: this.trigger = property as Trigger; break;
		case PROPERTY.UID: this.uid = property as UID; break;

		case PROPERTY.Description: this.description = property as Description; break;

		case PROPERTY.Summary: this.summary = property as Summary; break;

		case PROPERTY.Duration: this.duration = property as Duration; break;
		case PROPERTY.Repeat: this.repeat = property as Repeat; break;

		case PROPERTY.Attach:
			this.attachments = this.attachments || [];
			this.attachments.push(property as Attachment);
			break;
		case PROPERTY.Attendee:
			this.attendees = this.attendees || [];
			this.attendees.push(property as Attendee);
			break;
		}
	}

}

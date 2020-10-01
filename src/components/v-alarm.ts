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
	public action!: Action;
	public attachments!: Attachment[];
	public attendees!: Attendee[];
	public description!: Description;
	public duration!: Duration;
	public repeat!: Repeat;
	public summary!: Summary;
	public trigger!: Trigger;
	public uid!: UID;

	public setProperty(property: Property): void {
		switch (property.type) {
		case PROPERTY.UID: this.uid = property as UID; break;

		case PROPERTY.Action: this.action = property as Action; break;
		case PROPERTY.Description: this.description = property as Description; break;
		case PROPERTY.Summary: this.summary = property as Summary; break;
		case PROPERTY.Trigger: this.trigger = property as Trigger; break;

		case PROPERTY.Attach:
			this.attachments = this.attachments || [];
			this.attachments.push(property as Attachment);
			break;
		case PROPERTY.Attendee:
			this.attendees = this.attendees || [];
			this.attendees.push(property as Attendee);
			break;
		case PROPERTY.Duration: this.duration = property as Duration; break;
		case PROPERTY.Repeat: this.repeat = property as Repeat; break;
		}
	}

}

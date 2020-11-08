import { Component } from '~/components/component';
import { COMPONENT, PROPERTY } from '~/constant';
import { ConvertToICS } from '~/interfaces/convert-to-ics';
import { ComponentImpl } from '~/interfaces/impl';
import { Comment } from '~/properties/comment';
import { DateTimeStart } from '~/properties/date-time-start';
import { Property } from '~/properties/property';
import { RecurrenceDateTimes } from '~/properties/recurrence-date-times';
import { RRule } from '~/properties/rrule';
import { TZName } from '~/properties/tz-name';
import { TZOffsetFrom } from '~/properties/tz-offset-from';
import { TZOffsetTo } from '~/properties/tz-offset-to';

export class DayLight extends Component implements ComponentImpl {
	public type = COMPONENT.DayLight;

	// properties

	// The following are REQUIRED
	// but MUST NOT occur more than once
	public dtStart!: DateTimeStart;
	public tzOffsetFrom!: TZOffsetFrom;
	public tzOffsetTo!: TZOffsetTo;

	// The following is OPTIONAL
	// but SHOULD NOT occur more than once
	public rrule!: RRule;

	// The following are OPTIONAL
	// and MAY occur more than once
	public comments!: Comment[];
	public rDates!: RecurrenceDateTimes[];
	public tzName!: TZName;

	public setProperty(property: Property): this {
		switch (property.type) {
			case PROPERTY.DTStart:
				this.dtStart = property as DateTimeStart;
				break;
			case PROPERTY.TZOffsetFrom:
				this.tzOffsetFrom = property as TZOffsetFrom;
				break;
			case PROPERTY.TZOffsetTo:
				this.tzOffsetTo = property as TZOffsetTo;
				break;

			case PROPERTY.RRule:
				this.rrule = property as RRule;
				break;

			case PROPERTY.Comment:
				this.comments = this.comments || [];
				this.comments.push(property as Comment);
				break;
			case PROPERTY.RDate:
				this.rDates = this.rDates || [];
				this.rDates.push(property as RecurrenceDateTimes);
				break;
			case PROPERTY.TZName:
				this.tzName = property as TZName;
				break;
		}
		return this;
	}

	public getICSTokens(): ConvertToICS {
		// result
		const payload: ConvertToICS = {
			children: [],
			type: this.type,
		};

		// push properties

		if (this.dtStart) {
			payload.children.push(this.dtStart.toString());
		}
		if (this.tzOffsetFrom) {
			payload.children.push(this.tzOffsetFrom.toString());
		}
		if (this.tzOffsetTo) {
			payload.children.push(this.tzOffsetTo.toString());
		}

		if (this.rrule) {
			payload.children.push(this.rrule.toString());
		}

		if (this.comments) {
			payload.children.push(...this.comments.map((p) => p.toString()));
		}
		if (this.rDates) {
			payload.children.push(...this.rDates.map((p) => p.toString()));
		}
		if (this.tzName) {
			payload.children.push(this.tzName.toString());
		}

		return payload;
	}
}

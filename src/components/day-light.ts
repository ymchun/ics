import { Component } from '~/components/component';
import { COMPONENT, PROPERTY } from '~/constant';
import { ComponentImpl } from '~/interfaces/component-impl';
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

	public setProperty(property: Property): void {
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
	}
}

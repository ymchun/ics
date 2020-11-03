import { Component } from '~/components/component';
import { VEvent } from '~/components/v-event';
import { VFreeBusy } from '~/components/v-free-busy';
import { VTimezone } from '~/components/v-timezone';
import { COMPONENT, ICS_LINE_BREAK, KEYWORD, PROPERTY } from '~/constant';
import { ComponentImpl } from '~/interfaces/component-impl';
import { CalendarScale } from '~/properties/calendar-scale';
import { ExtWRCalDesc } from '~/properties/ext-wr-cal-desc';
import { ExtWRCalName } from '~/properties/ext-wr-cal-name';
import { ExtWRTimezone } from '~/properties/ext-wr-timezone';
import { Method } from '~/properties/method';
import { ProductId } from '~/properties/product-id';
import { Property } from '~/properties/property';
import { Version } from '~/properties/version';

export class VCalendar extends Component implements ComponentImpl {
	public type = COMPONENT.Calendar;

	// components

	// the followings are optional
	// but any calendar component must have
	// at least any one of the following component
	public events!: VEvent[];
	public freeBusy!: VFreeBusy[];
	public timezones!: VTimezone[];

	// properties

	// The following are REQUIRED
	// but MUST NOT occur more than once
	public productId!: ProductId;
	public version!: Version;

	// The following are OPTIONAL
	// but MUST NOT occur more than once
	public calScale!: CalendarScale;
	public method!: Method;

	public extWRCalDesc!: ExtWRCalDesc;
	public extWRCalName!: ExtWRCalName;
	public extWRTimezone!: ExtWRTimezone;

	public setComponent(component: Component): void {
		switch (component.type) {
			case COMPONENT.Event:
				this.events = this.events || [];
				this.events.push(component as VEvent);
				break;
			case COMPONENT.FreeBusy:
				this.freeBusy = this.freeBusy || [];
				this.freeBusy.push(component as VFreeBusy);
				break;
			case COMPONENT.Timezone:
				this.timezones = this.timezones || [];
				this.timezones.push(component as VTimezone);
				break;
		}
	}

	public setProperty(property: Property): void {
		switch (property.type) {
			case PROPERTY.ProdId:
				this.productId = property as ProductId;
				break;
			case PROPERTY.Version:
				this.version = property as Version;
				break;

			case PROPERTY.CalScale:
				this.calScale = property as CalendarScale;
				break;
			case PROPERTY.Method:
				this.method = property as Method;
				break;

			case PROPERTY.Extended.WR.CalendarDesc:
				this.extWRCalDesc = property as ExtWRCalDesc;
				break;
			case PROPERTY.Extended.WR.CalendarName:
				this.extWRCalName = property as ExtWRCalName;
				break;
			case PROPERTY.Extended.WR.Timezone:
				this.extWRTimezone = property as ExtWRTimezone;
				break;
		}
	}

	public toString(excludeBeginEnd = false): string {
		// result array
		const lines: string[] = [];

		// push properties

		if (this.method) {
			lines.push(this.method.toString());
		}
		if (this.version) {
			lines.push(this.version.toString());
		}
		if (this.productId) {
			lines.push(this.productId.toString());
		}
		if (this.calScale) {
			lines.push(this.calScale.toString());
		}

		if (this.extWRCalDesc) {
			lines.push(this.extWRCalDesc.toString());
		}
		if (this.extWRCalName) {
			lines.push(this.extWRCalName.toString());
		}
		if (this.extWRTimezone) {
			lines.push(this.extWRTimezone.toString());
		}

		// push components

		if (this.timezones) {
			lines.push(...this.timezones.map((p) => p.toString()));
		}
		if (this.freeBusy) {
			lines.push(...this.freeBusy.map((p) => p.toString()));
		}
		if (this.events) {
			lines.push(...this.events.map((p) => p.toString()));
		}

		// do not include component begin / end tag
		if (excludeBeginEnd) {
			return lines.join(ICS_LINE_BREAK);
		}

		// push begin tag
		lines.unshift(`${KEYWORD.Begin}:${this.type}`);
		// push end tag
		lines.push(`${KEYWORD.End}:${this.type}`);

		return lines.join(ICS_LINE_BREAK);
	}
}

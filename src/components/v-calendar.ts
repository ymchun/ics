import { Component } from '~/components/component';
import { VEvent } from '~/components/v-event';
import { VFreeBusy } from '~/components/v-free-busy';
import { VTimezone } from '~/components/v-timezone';
import { COMPONENT, PROPERTY } from '~/constant';
import { CalendarScale } from '~/properties/calendar-scale';
import { ExtWRCalDesc } from '~/properties/ext-wr-cal-desc';
import { ExtWRCalName } from '~/properties/ext-wr-cal-name';
import { ExtWRTimezone } from '~/properties/ext-wr-timezone';
import { Method } from '~/properties/method';
import { ProductId } from '~/properties/product-id';
import { Property } from '~/properties/property';
import { Version } from '~/properties/version';

export class VCalendar extends Component {
	public type = COMPONENT.Calendar;

	// components
	public events!: VEvent[];
	public freeBusy!: VFreeBusy[];
	public timezones!: VTimezone[];

	// properties
	public calScale!: CalendarScale;
	public method!: Method;
	public productId!: ProductId;
	public version!: Version;

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
		// The following are REQUIRED,
		// but MUST NOT occur more than once.
		case PROPERTY.ProdId: this.productId = property as ProductId; break;
		case PROPERTY.Version: this.version = property as Version; break;

		// The following are OPTIONAL,
		// but MUST NOT occur more than once.
		case PROPERTY.CalScale: this.calScale = property as CalendarScale; break;
		case PROPERTY.Method: this.method = property as Method; break;

		// extended
		case PROPERTY.Extended.WR.CalendarDesc: this.extWRCalDesc = property as ExtWRCalDesc; break;
		case PROPERTY.Extended.WR.CalendarName: this.extWRCalName = property as ExtWRCalName; break;
		case PROPERTY.Extended.WR.Timezone: this.extWRTimezone = property as ExtWRTimezone; break;
		}
	}

}

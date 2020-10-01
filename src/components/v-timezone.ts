import { Component } from '~/components/component';
import { DayLight } from '~/components/day-light';
import { Standard } from '~/components/standard';
import { COMPONENT, PROPERTY } from '~/constant';
import { LastModified } from '~/properties/last-modified';
import { Property } from '~/properties/property';
import { TZID } from '~/properties/tz-id';
import { TZUrl } from '~/properties/tz-url';

export class VTimezone extends Component {
	public type = COMPONENT.Timezone;

	// components
	public daylight!: DayLight;
	public standard!: Standard;

	// properties
	public lastModified!: LastModified;
	public TZID!: TZID;
	public TZUrl!: TZUrl;

	public setComponent(component: Component): void {
		switch (component.type) {
		case COMPONENT.DayLight: this.daylight = component as DayLight; break;
		case COMPONENT.Standard: this.standard = component as Standard; break;
		}
	}

	public setProperty(property: Property): void {
		switch (property.type) {
		// 'tzid' is REQUIRED, but MUST NOT occur more
		// than once.
		case PROPERTY.TZID: this.TZID = property as TZID; break;

		// 'last-mod' and 'tzurl' are OPTIONAL,
		// but MUST NOT occur more than once.
		case PROPERTY.LastModified: this.lastModified = property as LastModified; break;
		case PROPERTY.TZUrl: this.TZUrl = property as TZUrl; break;
		}
	}

}

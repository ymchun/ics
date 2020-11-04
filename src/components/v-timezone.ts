import { Component } from '~/components/component';
import { DayLight } from '~/components/day-light';
import { Standard } from '~/components/standard';
import { COMPONENT, PROPERTY } from '~/constant';
import { ComponentImpl } from '~/interfaces/component-impl';
import { ConvertToICS } from '~/interfaces/convert-to-ics';
import { LastModified } from '~/properties/last-modified';
import { Property } from '~/properties/property';
import { TZID } from '~/properties/tz-id';
import { TZUrl } from '~/properties/tz-url';

export class VTimezone extends Component implements ComponentImpl {
	public type = COMPONENT.Timezone;

	// components

	// One of 'standardc' or 'daylightc' MUST occur
	// and each MAY occur more than once.
	public daylight!: DayLight;
	public standard!: Standard;

	// properties

	// 'tzid' is REQUIRED
	// but MUST NOT occur more than once
	public TZID!: TZID;

	// 'last-mod' and 'tzurl' are OPTIONAL
	// but MUST NOT occur more than once
	public lastModified!: LastModified;
	public TZUrl!: TZUrl;

	public setComponent(component: Component): void {
		switch (component.type) {
			case COMPONENT.DayLight:
				this.daylight = component as DayLight;
				break;
			case COMPONENT.Standard:
				this.standard = component as Standard;
				break;
		}
	}

	public setProperty(property: Property): void {
		switch (property.type) {
			case PROPERTY.TZID:
				this.TZID = property as TZID;
				break;

			case PROPERTY.LastModified:
				this.lastModified = property as LastModified;
				break;
			case PROPERTY.TZUrl:
				this.TZUrl = property as TZUrl;
				break;
		}
	}

	public getICSTokens(): ConvertToICS {
		// result
		const payload: ConvertToICS = {
			children: [],
			type: this.type,
		};

		// push properties

		if (this.TZID) {
			payload.children.push(this.TZID.toString());
		}
		if (this.lastModified) {
			payload.children.push(this.lastModified.toString());
		}
		if (this.TZUrl) {
			payload.children.push(this.TZUrl.toString());
		}

		// push components

		if (this.daylight) {
			payload.children.push(this.daylight.getICSTokens());
		}
		if (this.standard) {
			payload.children.push(this.standard.getICSTokens());
		}

		return payload;
	}
}

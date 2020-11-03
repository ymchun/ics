import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';
import { CalAddress } from '~/values/cal-address';
import { Text } from '~/values/text';
import { URI } from '~/values/uri';

export class Organizer extends Property implements PropertyImpl<CalAddress> {
	public type = PROPERTY.Organizer;
	public value!: CalAddress;
	public parameters = {
		CN: null as Text | null,
		Dir: null as URI | null,
		Language: null as Text | null,
		SentBy: null as CalAddress | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
					case PARAMETER.CN:
						this.parameters.CN = new Text().setValue(param.value);
						break;
					case PARAMETER.Dir:
						this.parameters.Dir = new URI().setValue(param.value);
						break;
					case PARAMETER.Language:
						this.parameters.Language = new Text().setValue(param.value);
						break;
					case PARAMETER.SentBy:
						this.parameters.SentBy = new CalAddress().setValue(param.value);
						break;
				}
			});
		}
		// set value
		this.value = new CalAddress().setValue(this.token.value);
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.toString()}`);
	}
}

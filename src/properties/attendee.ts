import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';
import { Boolean as BooleanValue } from '~/values/boolean';
import { CalAddress } from '~/values/cal-address';
import { Text } from '~/values/text';
import { URI } from '~/values/uri';

export class Attendee extends Property implements PropertyImpl<CalAddress> {
	public type = PROPERTY.Attendee;
	public value!: CalAddress;
	public parameters = {
		CN: null as Text | null,
		CUType: null as Text | null,
		DelegatedFrom: null as CalAddress[] | null,
		DelegatedTo: null as CalAddress[] | null,
		Dir: null as URI | null,
		Email: null as Text | null,
		Language: null as Text | null,
		Member: null as CalAddress | null,
		PartStat: null as Text | null,
		Role: null as Text | null,
		Rsvp: null as BooleanValue | null,
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
					case PARAMETER.CUType:
						this.parameters.CUType = new Text().setValue(param.value);
						break;
					case PARAMETER.DelegatedFrom:
						this.parameters.DelegatedFrom = param.value.split(',').map((v) => new CalAddress().setValue(v));
						break;
					case PARAMETER.DelegatedTo:
						this.parameters.DelegatedTo = param.value.split(',').map((v) => new CalAddress().setValue(v));
						break;
					case PARAMETER.Dir:
						this.parameters.Dir = new URI().setValue(param.value);
						break;
					case PARAMETER.Email:
						this.parameters.Email = new Text().setValue(param.value);
						break;
					case PARAMETER.Language:
						this.parameters.Language = new Text().setValue(param.value);
						break;
					case PARAMETER.Member:
						this.parameters.Member = new CalAddress().setValue(param.value);
						break;
					case PARAMETER.PartStat:
						this.parameters.PartStat = new Text().setValue(param.value);
						break;
					case PARAMETER.Role:
						this.parameters.Role = new Text().setValue(param.value);
						break;
					case PARAMETER.Rsvp:
						this.parameters.Rsvp = new BooleanValue().setValue(param.value);
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

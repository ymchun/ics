import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { BooleanValue } from '~/values/boolean';
import { CalAddressValue } from '~/values/cal-address';
import { TextValue } from '~/values/text';
import { URIValue } from '~/values/uri';

export class Attendee extends Property implements PropertyImpl<CalAddressValue> {
	public type = PROPERTY.Attendee;
	public value!: CalAddressValue;
	public parameters = {
		CN: null as TextValue | null,
		CUType: null as TextValue | null,
		DelegatedFrom: null as CalAddressValue[] | null,
		DelegatedTo: null as CalAddressValue[] | null,
		Dir: null as URIValue | null,
		Email: null as TextValue | null,
		Language: null as TextValue | null,
		Member: null as CalAddressValue | null,
		PartStat: null as TextValue | null,
		Role: null as TextValue | null,
		Rsvp: null as BooleanValue | null,
		SentBy: null as CalAddressValue | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
					case PARAMETER.CN:
						this.parameters.CN = new TextValue().setValue(param.value);
						break;
					case PARAMETER.CUType:
						this.parameters.CUType = new TextValue().setValue(param.value);
						break;
					case PARAMETER.DelegatedFrom:
						this.parameters.DelegatedFrom = param.value
							.split(',')
							.map((v) => new CalAddressValue().setValue(v));
						break;
					case PARAMETER.DelegatedTo:
						this.parameters.DelegatedTo = param.value
							.split(',')
							.map((v) => new CalAddressValue().setValue(v));
						break;
					case PARAMETER.Dir:
						this.parameters.Dir = new URIValue().setValue(param.value);
						break;
					case PARAMETER.Email:
						this.parameters.Email = new TextValue().setValue(param.value);
						break;
					case PARAMETER.Language:
						this.parameters.Language = new TextValue().setValue(param.value);
						break;
					case PARAMETER.Member:
						this.parameters.Member = new CalAddressValue().setValue(param.value);
						break;
					case PARAMETER.PartStat:
						this.parameters.PartStat = new TextValue().setValue(param.value);
						break;
					case PARAMETER.Role:
						this.parameters.Role = new TextValue().setValue(param.value);
						break;
					case PARAMETER.Rsvp:
						this.parameters.Rsvp = new BooleanValue().setValue(param.value);
						break;
					case PARAMETER.SentBy:
						this.parameters.SentBy = new CalAddressValue().setValue(param.value);
						break;
				}
			});
		}
		// set value
		this.value = new CalAddressValue().setValue(this.token.value);
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.toString()}`);
	}
}

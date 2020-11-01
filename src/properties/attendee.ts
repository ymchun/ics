import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { foldLine, handleCalAddress, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';

export class Attendee extends Property implements PropertyImpl<string> {
	public type = PROPERTY.Attendee;
	public value!: string;
	public parameters = {
		CN: null as string | null,
		CUType: null as string | null,
		DelegatedFrom: null as string[] | null,
		DelegatedTo: null as string[] | null,
		Dir: null as string | null,
		Language: null as string | null,
		Member: null as string | null,
		PartStat: null as string | null,
		Role: null as string | null,
		Rsvp: null as string | null,
		SentBy: null as string | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
					case PARAMETER.CN:
						this.parameters.CN = param.value;
						break;
					case PARAMETER.CUType:
						this.parameters.CUType = param.value;
						break;
					case PARAMETER.DelegatedFrom:
						this.parameters.DelegatedFrom = param.value.split(',').map((v) => handleCalAddress(v));
						break;
					case PARAMETER.DelegatedTo:
						this.parameters.DelegatedTo = param.value.split(',').map((v) => handleCalAddress(v));
						break;
					case PARAMETER.Dir:
						this.parameters.Dir = param.value;
						break;
					case PARAMETER.Language:
						this.parameters.Language = param.value;
						break;
					case PARAMETER.Member:
						this.parameters.Member = handleCalAddress(param.value);
						break;
					case PARAMETER.PartStat:
						this.parameters.PartStat = param.value;
						break;
					case PARAMETER.Role:
						this.parameters.Role = param.value;
						break;
					case PARAMETER.Rsvp:
						this.parameters.Rsvp = param.value;
						break;
					case PARAMETER.SentBy:
						this.parameters.SentBy = handleCalAddress(param.value);
						break;
				}
			});
		}
		// set value
		this.value = handleCalAddress(this.token.value);
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value}`);
	}
}

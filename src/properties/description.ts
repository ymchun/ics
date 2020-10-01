import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { Property } from '~/properties/property';

export class Description extends Property {
	public type = PROPERTY.Description;
	public value!: string;
	public parameters = {
		AltRep: null as string | null,
		Language: null as string | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
				case PARAMETER.AltRep: this.parameters.AltRep = param.value; break;
				case PARAMETER.Language: this.parameters.Language = param.value; break;
				}
			});
		}
		// set value
		this.value = this.token.value;
	}

}

import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { Property } from '~/properties/property';

export class Trigger extends Property {
	public type = PROPERTY.Trigger;
	public value!: string;
	public parameters = {
		Related: null as string | null,
		Value: null as string | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set value
		this.value = this.token.value;
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
				case PARAMETER.Related: this.parameters.Related = param.value; break;
				case PARAMETER.Value: this.parameters.Value = param.value; break;
				}
			});
		}
	}

}

import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { Property } from '~/properties/property';

export class RelatedTo extends Property {
	public type = PROPERTY.RelatedTo;
	public value!: string;
	public parameters = {
		RelType: null as string | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
				case PARAMETER.RelType: this.parameters.RelType = param.value; break;
				}
			});
		}
		// set value
		this.value = this.token.value;
	}

}

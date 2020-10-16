import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';

export class FreeBusy extends Property implements PropertyImpl<string[]> {
	public type = PROPERTY.FreeBusy;
	public value!: string[];
	public parameters = {
		FBType: null as string | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
					case PARAMETER.FBType:
						this.parameters.FBType = param.value;
						break;
				}
			});
		}
		// set value
		this.value = this.token.value.split(',');
	}
}

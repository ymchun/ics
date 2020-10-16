import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';

export class Attachment extends Property implements PropertyImpl<string> {
	public type = PROPERTY.Attach;
	public value!: string;
	public parameters = {
		Encoding: null as string | null,
		FmtType: null as string | null,
		Value: null as string | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
					case PARAMETER.Encoding:
						this.parameters.Encoding = param.value;
						break;
					case PARAMETER.FmtType:
						this.parameters.FmtType = param.value;
						break;
					case PARAMETER.Value:
						this.parameters.Value = param.value;
						break;
				}
			});
		}
		// set value
		this.value = this.token.value;
	}
}

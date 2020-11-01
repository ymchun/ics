import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { foldLine, handleCalAddress, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';

export class Organizer extends Property implements PropertyImpl<string> {
	public type = PROPERTY.Organizer;
	public value!: string;
	public parameters = {
		CN: null as string | null,
		Dir: null as string | null,
		Language: null as string | null,
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
					case PARAMETER.Dir:
						this.parameters.Dir = param.value;
						break;
					case PARAMETER.Language:
						this.parameters.Language = param.value;
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

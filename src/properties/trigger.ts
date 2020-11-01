import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';

export class Trigger extends Property implements PropertyImpl<string> {
	public type = PROPERTY.Trigger;
	public value!: string;
	public parameters = {
		Related: null as string | null,
		Value: null as string | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
					case PARAMETER.Related:
						this.parameters.Related = param.value;
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

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value}`);
	}
}

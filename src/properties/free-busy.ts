import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';
import { Period } from '~/values/period';
import { Text } from '~/values/text';

export class FreeBusy extends Property implements PropertyImpl<Period[]> {
	public type = PROPERTY.FreeBusy;
	public value!: Period[];
	public parameters = {
		FBType: null as Text | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
					case PARAMETER.FBType:
						this.parameters.FBType = new Text().setValue(param.value);
						break;
				}
			});
		}
		// set value
		this.value = this.token.value.split(',').map((v) => new Period().setValue(v));
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.map((v) => v.toString()).join(',')}`);
	}
}

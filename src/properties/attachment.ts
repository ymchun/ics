import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';
import { Binary } from '~/values/binary';
import { Text } from '~/values/text';

export class Attachment extends Property implements PropertyImpl<Binary> {
	public type = PROPERTY.Attach;
	public value!: Binary;
	public parameters = {
		Encoding: null as Text | null,
		FmtType: null as Text | null,
		Value: null as Text | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
					case PARAMETER.Encoding:
						this.parameters.Encoding = new Text().setValue(param.value);
						break;
					case PARAMETER.FmtType:
						this.parameters.FmtType = new Text().setValue(param.value);
						break;
					case PARAMETER.Value:
						this.parameters.Value = new Text().setValue(param.value);
						break;
				}
			});
		}
		// set value
		this.value = new Binary().setValue(this.token.value);
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.toString()}`);
	}
}

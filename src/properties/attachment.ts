import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';
import { BinaryValue } from '~/values/binary';
import { TextValue } from '~/values/text';

export class Attachment extends Property implements PropertyImpl<BinaryValue> {
	public type = PROPERTY.Attach;
	public value!: BinaryValue;
	public parameters = {
		Encoding: null as TextValue | null,
		Filename: null as TextValue | null,
		FmtType: null as TextValue | null,
		Value: null as TextValue | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
					case PARAMETER.Encoding:
						this.parameters.Encoding = new TextValue().setValue(param.value);
						break;
					case PARAMETER.Filename:
						this.parameters.Filename = new TextValue().setValue(param.value);
						break;
					case PARAMETER.FmtType:
						this.parameters.FmtType = new TextValue().setValue(param.value);
						break;
					case PARAMETER.Value:
						this.parameters.Value = new TextValue().setValue(param.value);
						break;
				}
			});
		}
		// set value
		this.value = new BinaryValue().setValue(this.token.value);
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.toString()}`);
	}
}

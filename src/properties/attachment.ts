import { PARAMETER, PROPERTY } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { propertyParameterToString } from '~/internal-helper';
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

	public setValue(value: string): this {
		// set value
		this.value = new BinaryValue().setValue(value);
		return this;
	}

	public setParameter(type: string, value: string): this {
		switch (type) {
			case PARAMETER.Encoding:
				this.parameters.Encoding = new TextValue().setValue(value);
				break;
			case PARAMETER.Filename:
				this.parameters.Filename = new TextValue().setValue(value);
				break;
			case PARAMETER.FmtType:
				this.parameters.FmtType = new TextValue().setValue(value);
				break;
			case PARAMETER.Value:
				this.parameters.Value = new TextValue().setValue(value);
				break;
		}
		return this;
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.toString()}`);
	}
}

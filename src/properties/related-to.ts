import { PARAMETER, PROPERTY } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { TextValue } from '~/values/text';

export class RelatedTo extends Property implements PropertyImpl<TextValue> {
	public type = PROPERTY.RelatedTo;
	public value!: TextValue;
	public parameters = {
		RelType: null as TextValue | null,
	};

	public setValue(value: string): this {
		// set value
		this.value = new TextValue().setValue(value);
		return this;
	}

	public setParameter(type: string, value: string): this {
		switch (type) {
			case PARAMETER.RelType:
				this.parameters.RelType = new TextValue().setValue(value);
				break;
		}
		return this;
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.toString()}`);
	}
}

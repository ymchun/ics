import { PARAMETER, PROPERTY } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { propertyParameterToString } from '~/internal-helper';
import { Property } from '~/properties/property';
import { TextValue } from '~/values/text';

export class Categories extends Property implements PropertyImpl<TextValue[]> {
	public type = PROPERTY.Categories;
	public value!: TextValue[];
	public parameters = {
		Language: null as TextValue | null,
	};

	public setValue(value: string): this {
		// set value
		this.value = value.split(',').map((v) => new TextValue().setValue(v));
		return this;
	}

	public setParameter(type: string, value: string): this {
		switch (type) {
			case PARAMETER.Language:
				this.parameters.Language = new TextValue().setValue(value);
				break;
		}
		return this;
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.map((v) => v.toString()).join(',')}`);
	}
}

import { PROPERTY } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { TextValue } from '~/values/text';

export class Action extends Property implements PropertyImpl<TextValue> {
	public type = PROPERTY.Action;
	public value!: TextValue;

	public setValue(value: string): this {
		// set value
		this.value = new TextValue().setValue(value);
		return this;
	}

	public toString(): string {
		return foldLine(`${this.type}:${this.value.toString()}`);
	}
}

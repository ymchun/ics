import { PARAMETER, PROPERTY } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { TextValue } from '~/values/text';
import { URIValue } from '~/values/uri';

export class Contact extends Property implements PropertyImpl<TextValue> {
	public type = PROPERTY.Contact;
	public value!: TextValue;
	public parameters = {
		AltRep: null as URIValue | null,
		Language: null as TextValue | null,
	};

	public setValue(value: string): this {
		// set value
		this.value = new TextValue().setValue(value);
		return this;
	}

	public setParameter(type: string, value: string): this {
		switch (type) {
			case PARAMETER.AltRep:
				this.parameters.AltRep = new URIValue().setValue(value);
				break;
			case PARAMETER.Language:
				this.parameters.Language = new TextValue().setValue(value);
				break;
		}
		return this;
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.toString()}`);
	}
}

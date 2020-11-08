import { PARAMETER, PROPERTY } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { CalAddressValue } from '~/values/cal-address';
import { TextValue } from '~/values/text';
import { URIValue } from '~/values/uri';

export class Organizer extends Property implements PropertyImpl<CalAddressValue> {
	public type = PROPERTY.Organizer;
	public value!: CalAddressValue;
	public parameters = {
		CN: null as TextValue | null,
		Dir: null as URIValue | null,
		Language: null as TextValue | null,
		SentBy: null as CalAddressValue | null,
	};

	public setValue(value: string): this {
		// set value
		this.value = new CalAddressValue().setValue(value);
		return this;
	}

	public setParameter(type: string, value: string): this {
		switch (type) {
			case PARAMETER.CN:
				this.parameters.CN = new TextValue().setValue(value);
				break;
			case PARAMETER.Dir:
				this.parameters.Dir = new URIValue().setValue(value);
				break;
			case PARAMETER.Language:
				this.parameters.Language = new TextValue().setValue(value);
				break;
			case PARAMETER.SentBy:
				this.parameters.SentBy = new CalAddressValue().setValue(value);
				break;
		}
		return this;
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.toString()}`);
	}
}

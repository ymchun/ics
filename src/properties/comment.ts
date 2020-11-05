import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { TextValue } from '~/values/text';
import { URIValue } from '~/values/uri';

export class Comment extends Property implements PropertyImpl<TextValue> {
	public type = PROPERTY.Comment;
	public value!: TextValue;
	public parameters = {
		AltRep: null as URIValue | null,
		Language: null as TextValue | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				this.setParameter(param.name, param.value);
			});
		}
		// set value
		this.value = new TextValue().setValue(this.token.value);
	}

	public setParameter(type: string, value: string): void {
		switch (type) {
			case PARAMETER.AltRep:
				this.parameters.AltRep = new URIValue().setValue(value);
				break;
			case PARAMETER.Language:
				this.parameters.Language = new TextValue().setValue(value);
				break;
		}
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.toString()}`);
	}
}

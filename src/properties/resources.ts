import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { TextValue } from '~/values/text';
import { URIValue } from '~/values/uri';

export class Resources extends Property implements PropertyImpl<TextValue[]> {
	public type = PROPERTY.Resources;
	public value!: TextValue[];
	public parameters = {
		AltRep: null as URIValue | null,
		Language: null as TextValue | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
					case PARAMETER.AltRep:
						this.parameters.AltRep = new URIValue().setValue(param.value);
						break;
					case PARAMETER.Language:
						this.parameters.Language = new TextValue().setValue(param.value);
						break;
				}
			});
		}
		// set value
		this.value = this.token.value.split(',').map((v) => new TextValue().setValue(v));
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.map((v) => v.toString()).join(',')}`);
	}
}

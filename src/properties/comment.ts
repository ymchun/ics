import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';
import { Text } from '~/values/text';
import { URI } from '~/values/uri';

export class Comment extends Property implements PropertyImpl<Text> {
	public type = PROPERTY.Comment;
	public value!: Text;
	public parameters = {
		AltRep: null as URI | null,
		Language: null as Text | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
					case PARAMETER.AltRep:
						this.parameters.AltRep = new URI().setValue(param.value);
						break;
					case PARAMETER.Language:
						this.parameters.Language = new Text().setValue(param.value);
						break;
				}
			});
		}
		// set value
		this.value = new Text().setValue(this.token.value);
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.toString()}`);
	}
}

import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';
import { Text } from '~/values/text';

export class Categories extends Property implements PropertyImpl<Text[]> {
	public type = PROPERTY.Categories;
	public value!: Text[];
	public parameters = {
		Language: null as Text | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
					case PARAMETER.Language:
						this.parameters.Language = new Text().setValue(param.value);
						break;
				}
			});
		}
		// set value
		this.value = this.token.value.split(',').map((v) => new Text().setValue(v));
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.map((v) => v.toString()).join(',')}`);
	}
}

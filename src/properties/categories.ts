import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { Property } from '~/properties/property';

export class Categories extends Property {
	public type = PROPERTY.Categories;
	public value!: string[];
	public parameters = {
		Language: null as string | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
				case PARAMETER.Language: this.parameters.Language = param.value; break;
				}
			});
		}
		// set value
		this.value = this.token.value.split(',');
	}

}

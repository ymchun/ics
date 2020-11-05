import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { PeriodValue } from '~/values/period';
import { TextValue } from '~/values/text';

export class FreeBusy extends Property implements PropertyImpl<PeriodValue[]> {
	public type = PROPERTY.FreeBusy;
	public value!: PeriodValue[];
	public parameters = {
		FBType: null as TextValue | null,
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
		this.value = this.token.value.split(',').map((v) => new PeriodValue().setValue(v));
	}

	public setParameter(type: string, value: string): void {
		switch (type) {
			case PARAMETER.FBType:
				this.parameters.FBType = new TextValue().setValue(value);
				break;
		}
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.map((v) => v.toString()).join(',')}`);
	}
}

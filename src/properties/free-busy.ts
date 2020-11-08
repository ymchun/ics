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

	public setValue(value: string): this {
		// set value
		this.value = value.split(',').map((v) => new PeriodValue().setValue(v));
		return this;
	}

	public setParameter(type: string, value: string): this {
		switch (type) {
			case PARAMETER.FBType:
				this.parameters.FBType = new TextValue().setValue(value);
				break;
		}
		return this;
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.map((v) => v.toString()).join(',')}`);
	}
}

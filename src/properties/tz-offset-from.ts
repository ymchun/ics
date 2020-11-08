import { PROPERTY } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { UTCOffsetValue } from '~/values/utc-offset';

export class TZOffsetFrom extends Property implements PropertyImpl<UTCOffsetValue> {
	public type = PROPERTY.TZOffsetFrom;
	public value!: UTCOffsetValue;

	public setValue(value: string): this {
		// set value
		this.value = new UTCOffsetValue().setValue(value);
		return this;
	}

	public toString(): string {
		return foldLine(`${this.type}:${this.value.toString()}`);
	}
}

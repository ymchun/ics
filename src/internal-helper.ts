import { Component } from '~/components/component';
import { PARAMETER } from '~/constant';
import { quotedStr } from '~/helper';
import { CreateParamOptions } from '~/interfaces/create-component-options';
import { KeyMap } from '~/interfaces/global';
import { Property } from '~/properties/property';
import { Value } from '~/values/value';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function propertyParameterToString(parameters: KeyMap<Value<any>[] | Value<any> | null>): string {
	return Object.keys(parameters)
		.filter((key) => parameters[key] !== null)
		.map((key) => {
			const paramKey = (PARAMETER as KeyMap<string>)[key];
			const paramValue = (Array.isArray(parameters[key])
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				? (parameters[key] as Value<any>[]).map((v) => v.toString()).join(',')
				: parameters[key]?.toString()) as string;
			return `;${paramKey}=${quotedStr(paramValue)}`;
		})
		.join('');
}

export function builderSetProperty(component: Component, property: Property, options: string | CreateParamOptions): void {
	if (typeof options === 'string') {
		property.setValue(options);
	} else {
		const paramKeys = PARAMETER as KeyMap<string>;
		const opts = options as unknown as KeyMap<string>;
		Object.keys(opts).map((key) => {
			if (paramKeys[key] && opts[key]) {
				property.setParameter(paramKeys[key], opts[key]);
			}
		});
		property.setValue(opts.propertyValue);
	}
	component.setProperty(property);
}

import { Component } from '~/components/component';
import { Constructible } from '~/interfaces/constructible';
import { KeyMap } from '~/interfaces/global';
import { Property } from '~/properties/property';

export interface ParserOptions {
	components?: KeyMap<Constructible<Component>>;
	properties?: KeyMap<Constructible<Property>>;
	quiet?: boolean;
}

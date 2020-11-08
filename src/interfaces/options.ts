import { BuilderFunction } from '~/builders/builder-function';
import { Component } from '~/components/component';
import { Constructible, KeyMap } from '~/interfaces/global';
import { Property } from '~/properties/property';

export interface BuilderOptions {
	builders?: KeyMap<Constructible<BuilderFunction>>;
	components?: KeyMap<Constructible<Component>>;
	properties?: KeyMap<Constructible<Property>>;
	quiet?: boolean;
}

export interface ParserOptions {
	components?: KeyMap<Constructible<Component>>;
	properties?: KeyMap<Constructible<Property>>;
	quiet?: boolean;
}

export interface TokenizerOptions {
	quiet?: boolean;
}

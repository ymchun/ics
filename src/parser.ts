import { Component } from '~/components/component';
import { ComponentFactory } from '~/components/component-factory';
import { VCalendar } from '~/components/v-calendar';
import { COMPONENT, KEYWORD } from '~/constant';
import { evaluateComponentTimezone, getCalendarTimezone } from '~/helper';
import { Constructible } from '~/interfaces/global';
import { ParserOptions } from '~/interfaces/options';
import { Token } from '~/interfaces/token';
import { Iterable } from '~/iterable';
import { Property } from '~/properties/property';
import { PropertyFactory } from '~/properties/property-factory';
import { Tokenizer } from '~/tokenizer';

export class Parser {
	private componentFactory: ComponentFactory;
	private propertyFactory: PropertyFactory;
	private tokenizer: Tokenizer;

	// default options
	private options: ParserOptions = {
		quiet: false,
	};

	public constructor(opts?: ParserOptions) {
		// set quiet option
		this.options.quiet = !!opts?.quiet;

		this.componentFactory = new ComponentFactory({
			quiet: this.options.quiet,
		});
		this.propertyFactory = new PropertyFactory({
			quiet: this.options.quiet,
		});
		this.tokenizer = new Tokenizer({
			quiet: this.options.quiet,
		});

		if (opts) {
			Object.keys(opts.components || {}).map((key) => {
				if (opts.components) {
					this.registerComponent(key, opts.components[key]);
				}
			});
			Object.keys(opts.properties || {}).map((key) => {
				if (opts.properties) {
					this.registerProperty(key, opts.properties[key]);
				}
			});
		}
	}

	// register your custom components or replace existing components
	public registerComponent(key: string, component: Constructible<Component>): void {
		this.componentFactory.componentMap[key] = component;
	}

	// register your custom properties or replace existing properties
	public registerProperty(key: string, property: Constructible<Property>): void {
		this.propertyFactory.propertyMap[key] = property;
	}

	// parse from taw ics content
	public parse(ics: string): VCalendar[] {
		return this.parseTokens(this.tokenizer.tokenize(ics));
	}

	// parse ics tokens
	public parseTokens(tokens: Iterable<Token>): VCalendar[] {
		const results: VCalendar[] = [];

		for (const token of tokens) {
			if (token.name === KEYWORD.Begin && token.value === COMPONENT.Calendar) {
				// create the root calendar component
				const calendar = this.componentFactory.getComponent(token.value) as VCalendar;
				// feed tokens into component
				this.consumeTokens(tokens, calendar, calendar);
				// push it to result
				results.push(calendar);
			} else {
				throw Error(
					`Expecting '${KEYWORD.Begin}:${COMPONENT.Calendar}' but got: '${token.name}:${token.value}'`,
				);
			}
		}

		return results;
	}

	private consumeTokens(tokens: Iterable<Token>, current: Component, calendar: VCalendar): void {
		for (const token of tokens) {
			// start new component
			if (token.name === KEYWORD.Begin) {
				// create component based on token type
				const component = this.componentFactory.getComponent(token.value);

				if (component) {
					// feed tokens into component
					this.consumeTokens(tokens, component, calendar);
					// put component into parent component
					current.setComponent(component);
				}
			}
			// completion of current component
			else if (token.name === KEYWORD.End) {
				// detect incorrect end of component
				if (current.type !== token.value) {
					throw Error(`Expecting '${token.name}:${current.type}' but got: '${token.name}:${token.value}'`);
				}
				// populate component property value
				evaluateComponentTimezone(current, getCalendarTimezone(calendar));
				break;
			}
			// process component properties
			else {
				// create property based on token type
				const property = this.propertyFactory.getProperty(token.name);

				if (property) {
					// set property parameters
					if (token.parameters) {
						token.parameters.map((param) => {
							property.setParameter(param.name, param.value);
						});
					}
					// set property value
					property.setValue(token.value);
					// put property into component
					current.setProperty(property);
				}
			}
		}
	}
}

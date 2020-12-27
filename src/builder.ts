import { BuilderFactory } from '~/builders/builder-factory';
import { BuilderFunction } from '~/builders/builder-function';
import { Component } from '~/components/component';
import { ComponentFactory } from '~/components/component-factory';
import { CreateComponentOptions } from '~/interfaces/create-component-options';
import { Constructible } from '~/interfaces/global';
import { BuilderOptions } from '~/interfaces/options';
import { Property } from '~/properties/property';
import { PropertyFactory } from '~/properties/property-factory';

export class Builder {
	private builderFactory: BuilderFactory;
	private componentFactory: ComponentFactory;
	private propertyFactory: PropertyFactory;

	// default options
	private options: BuilderOptions = {
		quiet: false,
	};

	public constructor(opts?: BuilderOptions) {
		// set quiet option
		this.options.quiet = !!opts?.quiet;

		this.componentFactory = new ComponentFactory({
			quiet: this.options.quiet,
		});
		this.propertyFactory = new PropertyFactory({
			quiet: this.options.quiet,
		});
		this.builderFactory = new BuilderFactory({
			propertyFactory: this.propertyFactory,
			quiet: this.options.quiet,
		});

		if (opts) {
			Object.keys(opts.builders || {}).map((key) => {
				if (opts.builders) {
					this.registerBuilder(key, opts.builders[key]);
				}
			});
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

	// register your custom builders or replace existing builders
	public registerBuilder(key: string, builder: Constructible<BuilderFunction>): void {
		this.builderFactory.builderFuncMap[key] = builder;
	}

	// register your custom components or replace existing components
	public registerComponent(key: string, component: Constructible<Component>): void {
		this.componentFactory.componentMap[key] = component;
	}

	// register your custom properties or replace existing properties
	public registerProperty(key: string, property: Constructible<Property>): void {
		this.propertyFactory.propertyMap[key] = property;
	}

	public createComponent(opts: CreateComponentOptions): Component | undefined {
		const component = this.componentFactory.getComponent(opts.type);
		const builderFunc = this.builderFactory.getBuilderFunction(opts.type);

		if (component && builderFunc) {
			return builderFunc.build(component, opts) as Component;
		}
		return undefined;
	}
}

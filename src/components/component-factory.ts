import { Component } from '~/components/component';
import { DayLight } from '~/components/day-light';
import { Standard } from '~/components/standard';
import { VAlarm } from '~/components/v-alarm';
import { VCalendar } from '~/components/v-calendar';
import { VEvent } from '~/components/v-event';
import { VFreeBusy } from '~/components/v-free-busy';
import { VTimezone } from '~/components/v-timezone';
import { COMPONENT } from '~/constant';
import { ComponentFactoryOptions } from '~/interfaces/component-factory-options';
import { Constructible } from '~/interfaces/constructible';
import { KeyMap } from '~/interfaces/global';

export class ComponentFactory {
	// default options
	private options: ComponentFactoryOptions = {
		quiet: false,
	};

	public constructor(opts?: ComponentFactoryOptions) {
		this.options.quiet = !!opts?.quiet;
	}

	// the default set of components
	public componentMap: KeyMap<Constructible<Component>> = {
		[COMPONENT.Alarm]: VAlarm,
		[COMPONENT.Calendar]: VCalendar,
		[COMPONENT.DayLight]: DayLight,
		[COMPONENT.Event]: VEvent,
		[COMPONENT.FreeBusy]: VFreeBusy,
		[COMPONENT.Standard]: Standard,
		[COMPONENT.Timezone]: VTimezone,
	};

	public getComponent(type: string): Component | undefined {
		if (this.componentMap[type]) {
			return new this.componentMap[type]();
		}
		if (!this.options.quiet) {
			console.warn(`Unknown component type: '${type}'`);
		}
	}
}

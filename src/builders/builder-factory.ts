import { BuilderFunction } from '~/builders/builder-function';
import { DayLightBuilder } from '~/builders/day-light-builder';
import { StandardBuilder } from '~/builders/standard-builder';
import { VAlarmBuilder } from '~/builders/v-alarm-builder';
import { VCalendarBuilder } from '~/builders/v-calendar-builder';
import { VEventBuilder } from '~/builders/v-event-builder';
import { VFreeBusyBuilder } from '~/builders/v-free-busy-builder';
import { VTimezoneBuilder } from '~/builders/v-timezone-builder';
import { COMPONENT } from '~/constant';
import { BuilderFactoryOptions } from '~/interfaces/factory-options';
import { Constructible, KeyMap } from '~/interfaces/global';
import { PropertyFactory } from '~/properties/property-factory';

export class BuilderFactory {
	// the default set of builder functions
	public builderFuncMap: KeyMap<Constructible<BuilderFunction>> = {
		[COMPONENT.Alarm]: VAlarmBuilder,
		[COMPONENT.Calendar]: VCalendarBuilder,
		[COMPONENT.DayLight]: DayLightBuilder,
		[COMPONENT.Event]: VEventBuilder,
		[COMPONENT.FreeBusy]: VFreeBusyBuilder,
		[COMPONENT.Standard]: StandardBuilder,
		[COMPONENT.Timezone]: VTimezoneBuilder,
	};

	// default options
	private options: BuilderFactoryOptions = {
		quiet: false,
	};
	private propertyFactory?: PropertyFactory;

	public constructor(opts?: BuilderFactoryOptions) {
		this.options.quiet = !!opts?.quiet;
		this.propertyFactory =
			opts?.propertyFactory ||
			new PropertyFactory({
				quiet: this.options.quiet,
			});
	}

	public getBuilderFunction(type: string): BuilderFunction | undefined {
		if (this.builderFuncMap[type]) {
			return new this.builderFuncMap[type](this.propertyFactory);
		}
		if (!this.options.quiet) {
			console.warn(`Unknown builder function type: '${type}'`);
		}
	}
}

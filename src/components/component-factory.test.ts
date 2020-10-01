import { ComponentFactory } from '~/components/component-factory';
import { VCalendar } from '~/components/v-calendar';
import { COMPONENT } from '~/constant';

describe('<component-factory.ts>', () => {

	test('test getComponent', () => {
		// create component factory
		const componentFactory = new ComponentFactory();

		// test component factory can create
		expect(componentFactory).not.toBeUndefined();

		// test build-in components
		expect(componentFactory.getComponent(COMPONENT.Calendar)).toBeInstanceOf(VCalendar);

		// test custom components
		componentFactory.componentMap['test_component'] = VCalendar;
		expect(componentFactory.getComponent('test_component')).toBeInstanceOf(VCalendar);

		// test unknown components
		global.console = {
			...global.console,
			warn: jest.fn(),
		};
		componentFactory.getComponent('some_key');
		expect(console.warn).toBeCalledWith(expect.any(String));
	});

});

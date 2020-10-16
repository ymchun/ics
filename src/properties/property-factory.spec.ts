import { PROPERTY } from '~/constant';
import { Attachment } from '~/properties/attachment';
import { PropertyFactory } from '~/properties/property-factory';

describe('<property-factory.ts>', () => {
	test('getProperty', () => {
		// create property factory
		const propertyFactory = new PropertyFactory();
		// test property factory can create
		expect(propertyFactory).not.toBeUndefined();
		// test build-in properties
		expect(propertyFactory.getProperty(PROPERTY.Attach)).toBeInstanceOf(Attachment);
		// test custom properties
		propertyFactory.propertyMap['test_property'] = Attachment;
		expect(propertyFactory.getProperty('test_property')).toBeInstanceOf(Attachment);
		// test unknown properties
		global.console = {
			...global.console,
			warn: jest.fn(),
		};
		propertyFactory.getProperty('some_key');
		expect(console.warn).toBeCalledWith(expect.any(String));
	});
});

# @ymchun/ics

[![Build Status](https://travis-ci.com/ymchun/ics.svg?branch=master)](https://travis-ci.com/ymchun/ics)
[![Coverage Status](https://coveralls.io/repos/github/ymchun/ics/badge.svg?branch=master)](https://coveralls.io/github/ymchun/ics?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/ymchun/ics/badge.svg?targetFile=package.json)](https://snyk.io/test/github/ymchun/ics?targetFile=package.json)
[![npm version](https://badge.fury.io/js/%40ymchun%2Fics.svg)](https://badge.fury.io/js/%40ymchun%2Fics)

# UNDER ACTIVE DEVELOPMENT, MAY HAVE BREAKING CHANGES

## Install

```
$ npm i @ymchun/ics
```

## Basic Usage

```typescript
import { Parser, ParserOptions } from '@ymchun/ics';

const icsStr = '......'; // your ics file content
const opts: ParserOptions = {
	// whether the parser should emit warning message
	quiet: true,
};

// 'calendars' is array of v-calendar components
const calendars = new Parser(opts).parse(icsStr);
```

## Extending components and properties

More components and properties can be supported by extending `Component` and `Property` classes.

Also, your custom components and properties should implements `ComponentImpl` and `PropertyImpl<T>`.

For `PropertyImpl<T>`, the generic type refer to the type of your property value.

```typescript
import {
	Component,
	COMPONENT,
	ComponentImpl,
	DateValue,
	ICS_LINE_BREAK,
	Parser,
	ParserOptions,
	Property,
	PropertyImpl,
	propertyParameterToString,
	TextValue,
	VCalendar,
} from '@ymchun/ics';

// define your custom ics property
class MyCustomPropertyA extends Property implements PropertyImpl<TextValue> {
	// type should match your property key when feeding into the parser options
	public type = 'MyCustomPropertyA'; // <-- property key, mandatory
	public value!: TextValue; // <-- property value, mandatory
	public parameters = {
		// property parameters
		Encoding: null as TextValue | null,
		MyCustomParam: null as MyCustomParam | null,
	};

	// this method should be implemented
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
					case PARAMETER.Encoding:
						this.parameters.Encoding = new TextValue().setValue(param.value);
						break;
					case PARAMETER.MyCustomParam:
						this.parameters.MyCustomParam = new MyCustomParam().setValue(param.value);
						break;
				}
			});
		}
		// your property should use the 'token' property from parent class to set the value
		// since properties may have different value type, so this method is where you parse your own value
		// 'token' will become null after this method is called
		this.value = new BinaryValue().setValue(this.token.value);
	}

	// toString convert property into ics string
	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.toString()}`);
	}
}

class MyCustomPropertyB extends Property implements PropertyImpl<DateValue> {
	// type should match your property key when feeding into the parser options
	public type = 'MyCustomPropertyB'; // <-- property key, mandatory
	public value!: DateValue; // <-- property value, mandatory

	// this method should be implemented
	public evaluate(calendar: VCalendar): void {
		// or if your property value is a Date object
		this.value = new DateValue().setValue(this.token.value);
	}

	// toString convert property into ics string
	public toString(): string {
		return foldLine(`${this.type}:${this.value.toString()}`);
	}
}

// define your custom ics component
class MyCustomComponent extends Component implements ComponentImpl {
	// type should match your component key when feeding into the parser options
	public type = 'MyCustomComponent'; // <-- component key, mandatory

	public myCustomPropertyA: MyCustomPropertyA; // <-- use 'MyCustomPropertyA' here
	public myCustomPropertyB: MyCustomPropertyB; // <-- use 'MyCustomPropertyB' here

	public childComponentTypeA: ComponentTypeA;
	public childComponentTypeB: ComponentTypeB;

	public propertyTypeA: PropertyTypeA;
	public propertyTypeB: PropertyTypeB;
	public propertyTypeC: PropertyTypeC;

	// this method should be implemented when your component contains other components
	public setComponent(component: Component): void {
		switch (component.type) {
			case 'TypeA':
				this.daylight = component as ComponentTypeA;
				break;
			case 'TypeB':
				this.daylight = component as ComponentTypeB;
				break;
		}
	}

	// this method should be implemented when your component has properties
	public setProperty(property: Property): void {
		switch (property.type) {
			case 'TypeA':
				this.propertyTypeA = property as PropertyTypeA;
				break;
			case 'TypeB':
				this.propertyTypeB = property as PropertyTypeB;
				break;
			case 'TypeC':
				this.propertyTypeC = property as PropertyTypeC;
				break;
			//    v-- property key
			case 'MyCustomPropertyA':
				this.myCustomPropertyA = property as MyCustomPropertyA;
				break;
			case 'MyCustomPropertyB':
				this.myCustomPropertyB = property as MyCustomPropertyB;
				break;
		}
	}

	// toString convert component into ics string
	public toString(excludeBeginEnd = false): string {
		// result array
		const lines: string[] = [];

		// push properties
		if (this.myCustomPropertyA) {
			lines.push(this.myCustomPropertyA.toString());
		}
		if (this.myCustomPropertyB) {
			lines.push(this.myCustomPropertyB.toString());
		}
		if (this.childComponentTypeA) {
			lines.push(this.childComponentTypeA.toString());
		}
		if (this.childComponentTypeB) {
			lines.push(this.childComponentTypeB.toString());
		}
		if (this.propertyTypeA) {
			lines.push(this.propertyTypeA.toString());
		}
		if (this.propertyTypeB) {
			lines.push(this.propertyTypeB.toString());
		}
		if (this.propertyTypeC) {
			lines.push(this.propertyTypeC.toString());
		}

		// do not include component begin / end tag
		if (excludeBeginEnd) {
			return lines.join(ICS_LINE_BREAK);
		}

		// push begin tag
		lines.unshift(`${KEYWORD.Begin}:${this.type}`);
		// push end tag
		lines.push(`${KEYWORD.End}:${this.type}`);

		return lines.join(ICS_LINE_BREAK);
	}
}

// your can also extends existing component
class MyExtendedVCalendar extends VCalendar implements ComponentImpl {
	public myCustomProperty: MyCustomProperty; // <-- use 'MyCustomProperty' here

	// this method should be implemented when your component has properties
	public setProperty(property: Property): void {
		switch (property.type) {
			case 'MyCustomProperty':
				this.myCustomProperty = property as MyCustomProperty;
				break;
			default:
				// you should call parent class 'setProperty' method to avoid missing parent properties
				super.setProperty(property);
		}
	}

	// toString convert component into ics string
	public toString(excludeBeginEnd = false): string {
		// result array
		const lines: string[] = [];

		lines.push(super.toString(true));

		// do not include component begin / end tag
		if (excludeBeginEnd) {
			return lines.join(ICS_LINE_BREAK);
		}

		// push begin tag
		lines.unshift(`${KEYWORD.Begin}:${this.type}`);
		// push end tag
		lines.push(`${KEYWORD.End}:${this.type}`);

		return lines.join(ICS_LINE_BREAK);
	}
}

const icsStr = '......'; // your ics file content
const opts: ParserOptions = {
	components: {
		// the key should match the ics 'BEGIN:xxx' and 'END:xxx'
		// i.e. when parser meet 'BEGIN:MyCustomComponent', it will use this component.
		// v-- component key
		MyCustomComponent: MyCustomComponent,
		// overriding the default vCalendar component
		[COMPONENT.Calendar]: MyExtendedVCalendar,
	},
	properties: {
		// the key should match the ics 'MyCustomPropertyA:xxx' component property
		// v-- property key
		MyCustomPropertyA: MyCustomPropertyA,
		MyCustomPropertyB: MyCustomPropertyB,
	},
};

// 'calendars' is array of v-calendar components
const calendars = new Parser(opts).parse(icsStr);
```

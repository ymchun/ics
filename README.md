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
// convert Vcalendar back to ics file
const ics = convertToIcs(calendar[0].getICSTokens());
```

## Extending components and properties

More components and properties can be supported by extending `Component` and `Property` classes.

Also, your custom components and properties should implements `ComponentImpl` and `PropertyImpl<T>`.

For `PropertyImpl<T>`, the generic type refer to the type of your property value.

### Define your custom property with parameters

```typescript
class MyCustomPropertyA extends Property implements PropertyImpl<TextValue> {
	// type should match your property key when feeding into the parser options
	public type = 'MyCustomPropertyA'; // <-- property key, mandatory
	public value!: TextValue; // <-- property value, mandatory
	public parameters = {
		// property parameters
		Encoding: null as TextValue | null,
		MyCustomParam: null as MyCustomParam | null,
	};

	// set property value
	public setValue(value: string): this {
		// your property should use the 'token' property from parent class to set the value
		// since properties may have different value type, so this method is where you parse your own value
		// 'token' will become null after this method is called
		this.value = new BinaryValue().setValue(this.token.value);
		return this;
	}

	// set property parameters
	public setParameter(type: string, value: string): this {
		switch (param.name) {
			case PARAMETER.Encoding:
				this.parameters.Encoding = new TextValue().setValue(param.value);
				break;
			case PARAMETER.MyCustomParam:
				this.parameters.MyCustomParam = new MyCustomParam().setValue(param.value);
				break;
		}
		return this;
	}

	// toString convert property into ics string
	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.toString()}`);
	}
}
```

### Define your custom property without parameters

```typescript
class MyCustomPropertyB extends Property implements PropertyImpl<DateValue> {
	// type should match your property key when feeding into the parser options
	public type = 'MyCustomPropertyB'; // <-- property key, mandatory
	public value!: DateValue; // <-- property value, mandatory

	// this method should be implemented
	public setValue(value: string): this {
		// or if your property value is a Date object
		this.value = new DateValue().setValue(this.token.value);
		return this;
	}

	// toString convert property into ics string
	public toString(): string {
		return foldLine(`${this.type}:${this.value.toString()}`);
	}
}
```

### Define your custom component

```typescript
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
	public setComponent(component: Component): this {
		switch (component.type) {
			case 'TypeA':
				this.daylight = component as ComponentTypeA;
				break;
			case 'TypeB':
				this.daylight = component as ComponentTypeB;
				break;
		}
		return this;
	}

	// this method should be implemented when your component has properties
	public setProperty(property: Property): this {
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
			// property key --v
			case 'MyCustomPropertyA':
				this.myCustomPropertyA = property as MyCustomPropertyA;
				break;
			case 'MyCustomPropertyB':
				this.myCustomPropertyB = property as MyCustomPropertyB;
				break;
		}
		return this;
	}

	// toString convert component into ics string
	public getICSTokens(): ConvertToICS {
		// result
		const payload: ConvertToICS = {
			children: [],
			type: this.type,
		};

		// push properties
		if (this.myCustomPropertyA) {
			payload.children.push(this.myCustomPropertyA.toString());
		}
		if (this.myCustomPropertyB) {
			payload.children.push(this.myCustomPropertyB.toString());
		}
		if (this.propertyTypeA) {
			payload.children.push(this.propertyTypeA.toString());
		}
		if (this.propertyTypeB) {
			payload.children.push(this.propertyTypeB.toString());
		}
		if (this.propertyTypeC) {
			payload.children.push(this.propertyTypeC.toString());
		}

		// push components
		if (this.childComponentTypeA) {
			payload.children.push(this.childComponentTypeA.getICSTokens());
		}
		if (this.childComponentTypeB) {
			payload.children.push(this.childComponentTypeB.getICSTokens());
		}

		return payload;
	}
}
```

### Extending existing component

```typescript
class MyExtendedVCalendar extends VCalendar implements ComponentImpl {
	public myCustomProperty: MyCustomProperty; // <-- use 'MyCustomProperty' here

	// this method should be implemented when your component has properties
	public setProperty(property: Property): this {
		switch (property.type) {
			case 'MyCustomProperty':
				this.myCustomProperty = property as MyCustomProperty;
				break;
			default:
				// you should call parent class 'setProperty' method to avoid missing parent properties
				super.setProperty(property);
		}
		return this;
	}

	// toString convert component into ics string
	public getICSTokens(): ConvertToICS {
		// you should call the parent get tokens first
		const payload = super.getICSTokens();

		// then append your custom properties
		if (this.myCustomProperty) {
			payload.children.push(this.myCustomProperty.toString());
		}

		return payload;
	}
}
```

### Register your custom components and properties via options

```typescript
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

// parse icsStr into VCalendar object
const calendars = new Parser(opts).parse(icsStr);
```

export interface Token {
	name: string;
	value: string;
	parameters?: Parameter[];
}

export interface Parameter {
	name: string;
	value: string;
}

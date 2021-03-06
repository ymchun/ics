module.exports = {
	bail: true,
	clearMocks: true,
	preset: 'ts-jest',
	testEnvironment: 'node',
	verbose: true,
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
	collectCoverageFrom: [
		'<rootDir>/src/**/*.ts',
	],
	coveragePathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/src/dev.ts',
		'<rootDir>/src/index.ts',
		'<rootDir>/src/types',
	],
	moduleFileExtensions: [
		'ts',
		'tsx',
		'js',
		'jsx',
	],
	moduleNameMapper: {
		'~/(.*)': '<rootDir>/src/$1',
	},
	transform: {
		'^.+\\.(ts|tsx|d.ts)$': 'ts-jest',
	},
};

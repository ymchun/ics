module.exports = {
	bail: true,
	clearMocks: true,
	preset: 'ts-jest',
	testEnvironment: 'node',
	verbose: true,
	collectCoverageFrom: [
		'<rootDir>/src/**/*.ts',
	],
	coveragePathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/src/dev.ts',
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

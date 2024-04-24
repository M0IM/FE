import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	verbose: true,
	collectCoverage: true,

	// Jest 특정경로 테스트 진행 X
	testPathIgnorePatterns: ['<rootDir>/cypress/'],
	// Jest 절대경로 사용
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
		'^utils/(.*)': '<rootDir>/src/utils/$1',
	},
};

export default config;

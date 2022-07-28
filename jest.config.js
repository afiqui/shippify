// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,

  coverageDirectory: 'coverage',

  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],

  testEnvironment: 'node',

  testMatch: ['**/__tests__/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).ts?(x)'],

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
};

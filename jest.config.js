module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/unit/*.spec.(ts|js)'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputName: './unit.junit.xml',
        outputDirectory: './test-reports',
        suiteNameTemplate: '{filename}',
        classNameTemplate: '{classname}',
        titleTemplate: '{title}',
      },
    ],
  ],
  collectCoverageFrom: ['**/src/**/*.(ts|js)'],
  coverageThreshold: {
    global: {
      functions: 100,
      branches: 80,
      lines: 80,
    },
  },
};

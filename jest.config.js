const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/src/**/*.test.ts*'],
}
module.exports = createJestConfig(customJestConfig)

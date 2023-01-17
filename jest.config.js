/** @type {import('ts-jest').JestConfigWithTsJest} */
export default{
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals:{
    'ts-jest':{
      tsconfig: 'tsconfig.jest.json'
    }
  }
};
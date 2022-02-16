/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  moduleDirectories: ["node_modules"],
  preset: "ts-jest",
  // this is required for testing backend since jest is made for front end testing
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
    "babel-jest": {
      isolatedModules: true,
    },
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // Adding this line solved the issue
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
};

module.exports = {
  testPathIgnorePatters: ["/node_modules/"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts(x)?"],
  "setupFilesAfterEnv": [
    "<rootDir>/src/setupTests.ts"
  ],
  modulePath: ["<rootDir>/src/"],
  testEnvironment: "jsdom",
  transform: {
    ".(ts|tsx)$": "ts-jest",
  },
};

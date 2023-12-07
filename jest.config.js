"use strict";

module.exports = {
  "collectCoverage": true,
  "coverageReporters": ["lcov", "text"],
  "coveragePathIgnorePatterns": [
    "<rootDir>/node_modules/",
    "<rootDir>/test",
  ],
  "roots": [
    "<rootDir>/test",
  ],
  "testMatch": [
    "**/*.spec.js",
    "**/*.spec.ts",
    "**/*.test-d.ts",
  ],
  "transform": {
    "^.+\\.ts$": ["ts-jest", { "tsconfig":"tsconfig-build.json" }],
  },
  "testTimeout": 20000,
};

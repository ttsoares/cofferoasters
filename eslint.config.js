// const { defineConfig } = require('eslint/config');
// const expoConfig = require('eslint-config-expo/flat');

// module.exports = defineConfig([
//   expoConfig,
//   {
//     ignores: ['dist/*'],
//   },
// ]);

// eslint.config.js
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
    rules: {
      // Prevent auto-removal of unused variables and imports
      "no-unused-vars": "warn",
      // Disable these in case they exist inside expoConfig
      "unused-imports/no-unused-imports": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
]);

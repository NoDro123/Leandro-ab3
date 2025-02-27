import globals from "globals";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    ignores: ["**/*.yaml", "node_modules", "build", "coverage"],
    languageOptions: { sourceType: "commonjs", globals: globals.browser },
    rules: {
      semi: ["error", "always"],
      camelcase: ["error", { properties: "always" }],
      "max-len": ["error", { code: 80, tabWidth: 4 }],
      quotes: ["error", "double", { avoidEscape: true }],
      "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    },
  },
];

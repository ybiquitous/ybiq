import js from "@eslint/js"; // eslint-disable-line n/no-extraneous-import
import { defineConfig } from "eslint/config";

import nodePlugin from "eslint-plugin-n";
import tsPlugin from "typescript-eslint";
import jestPlugin from "eslint-plugin-jest";

export default defineConfig([
  // Base
  {
    ignores: ["coverage", "dist", "tmp"],
    linterOptions: {
      reportUnusedDisableDirectives: "error",
      reportUnusedInlineConfigs: "error",
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    extends: [js.configs.recommended, nodePlugin.configs["flat/recommended-module"]],
  },

  // TypeScript
  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json", "./test/tsconfig.test.json"],
      },
    },
    extends: [tsPlugin.configs.eslintRecommended, tsPlugin.configs.strictTypeChecked],
  },

  // Jest
  {
    files: ["**/*.test.js"],
    extends: [jestPlugin.configs["flat/recommended"]],
  },

  // Exceptions
  {
    files: ["lib/templates/**/*.js"],
    rules: {
      "n/no-extraneous-import": "off",
    },
  },
]);

import js from "@eslint/js";
import { defineConfig } from "eslint/config";

import nodePlugin from "eslint-plugin-n";
import tsPlugin from "typescript-eslint";
import secureCoding from 'eslint-plugin-secure-coding';

export default defineConfig([
  // Base
  {
    ignores: ["coverage/**", "dist/**", "tmp/**"],
  },
  {
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

  // Exceptions
  {
    files: ["lib/templates/**/*.js"],
    rules: {
      "n/no-extraneous-import": "off",
    },
  },

  // Security rules, CWE- and CVSS-tagged, scoped to source.
  //
  // Measured against this repository before proposing it: 0 findings across
  // lib/**/*.{js,mjs,cjs,ts,tsx}. That is the point rather than a caveat — the block goes red on a
  // new one, not on what is here today.
  {
    files: ['lib/**/*.{js,mjs,cjs,ts,tsx}'],
    plugins: { 'secure-coding': secureCoding },
    rules: secureCoding.configs.recommended.rules,
  },
]);

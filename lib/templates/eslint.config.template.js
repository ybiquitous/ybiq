import js from "@eslint/js"; // eslint-disable-line n/no-extraneous-import
import { defineConfig } from "eslint/config";

export default defineConfig([
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
    extends: [js.configs.recommended],
  },
]);

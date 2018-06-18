module.exports = {
  extends: ["@commitlint/config-conventional"],

  rules: {
    "scope-enum": [
      2,
      "always",
      [
        "",
        "deps",
        "package",
        "readme",
        "eslint",
        "editorconfig",
        "commitlint",
        "coverage",
        "release",
        "init",
        "api",
        "markdownlint",
        "travis",
        "prettier",
      ],
    ],
  },
};

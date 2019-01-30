module.exports = {
  extends: ["@commitlint/config-conventional"],

  rules: {
    "scope-enum": [
      2,
      "always",
      [
        "",
        "deps",
        "deps-dev",
        "package",
        "readme",
        "eslint",
        "editorconfig",
        "commitlint",
        "coverage",
        "release",
        "init",
        "api",
        "remark",
        "travis",
        "prettier",
        "standard-version",
      ],
    ],
  },
};

module.exports = {
  root: true,

  extends: ["ybiquitous/node"],

  overrides: [
    {
      files: ["**/test/**/*.js"],
      rules: {
        "no-shadow": ["error", { allow: ["t"] }],
        "import/no-internal-modules": "off",
      },
    },
  ],
};

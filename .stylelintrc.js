// stylelint configuration
// https://stylelint.io/user-guide/configuration/
module.exports = {
  // The standard config based on a handful of CSS style guides
  // https://github.com/stylelint/stylelint-config-standard

  processors: ["stylelint-processor-styled-components"],

  extends: "stylelint-config-standard",

  syntax: "scss",

  plugins: [],

  rules: {}
};

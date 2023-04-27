module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["airbnb-base", "prettier"],
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  "extends": "eslint:recommended",
  rules: {
    "no-console": 1,
    "import/prefer-default-export": 0,
    "prefer-template": 0,//Require template literals instead of string concatenation
    "no-var": "error",//Require let or const instead of var
    "semi": ["error", "always"],//Require or disallow semicolons instead of ASI
    "indent": ["error", 2],//Enforce consistent indentation
    "no-multi-spaces": "error",//Disallow multiple spaces
    "space-in-parens": "error",//Enforce consistent spacing inside parentheses
    "no-multiple-empty-lines": "error",//Disallow multiple empty lines
    "prefer-const": "error",//Require const declarations for variables that are never reassigned after declared
    "no-use-before-define": "error",//Disallow the use of variables before they are defined
    "eqeqeq": "warn",//Require the use of === and !==
    "curly": "error",//Enforce consistent brace style for all control statements
    "quotes": ["error", "double"],//Enforce the consistent use of either backticks, double, or single quotes
    "space-infix-ops": ["error", { "int32Hint": false }]//Требовать пробелы вокруг инфиксных операторов =/+/-
  },
  //Error: Failed to load parser 'babel-eslint' declared in '.eslintrc.js': => //npm install eslint@4.x babel-eslint@8 - g - 
  // npx eslint -h//help
  // npx eslint --fix file.js// исправить как можно больше проблем. Исправления вносятся в сами файлы, и выводятся только оставшиеся неисправленные проблемы.
  // npm run lint
  // npm run lint:fix
};
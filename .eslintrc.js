module.exports = {
    parser: "@babel/eslint-parser",
    extends: ["airbnb-base", "prettier"],
    parser: "babel-eslint",
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    rules: {
        "no-console": warn,
        "import/prefer-default-export": warn,
        "prefer-template": warn,//Require template literals instead of string concatenation
        "no-var": "error",//Require let or const instead of var
        "semi": "error",//Require or disallow semicolons instead of ASI
        "indent": ["error", 2],//Enforce consistent indentation
        "no-multi-spaces": "error",//Disallow multiple spaces
        "space-in-parens": "error",//Enforce consistent spacing inside parentheses
        "no-multiple-empty-lines": "error",//Disallow multiple empty lines
        "prefer-const": "error",//Require const declarations for variables that are never reassigned after declared
        "no-use-before-define": "error"//Disallow the use of variables before they are defined
    },
};
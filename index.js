module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "airbnb",
        "plugin:flowtype/recommended"
    ],
    "plugins": [
        "flowtype",
        "flowtype-errors",
        "no-only-tests"
    ],
    "settings": {
        "flowtype": {
            "onlyFilesWithFlowAnnotation": true
        },
    },
    "env": {
        "browser": true, // We write for browser
        "node": true, // in CommonJS
        "es6": true // And we use ES6 features
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {

        ////////// Possible Errors //////////

        "no-console": "error",
        "no-only-tests/no-only-tests": "error",
        "no-mixed-operators": [
            "error",
            {
                "groups": [
                    ["+", "-", "*", "/", "%", "**"],
                    ["&", "|", "^", "~", "<<", ">>", ">>>"],
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"]
                ],
                "allowSamePrecedence": true
            }
        ],

        ////////// Best Practices //////////

        "guard-for-in": "off",
        "no-param-reassign": ["error", { "props": false }], // as long we have angular code, needed for $scope
        "radix": ["off"],
        "no-use-before-define": ["error", { "functions": false }],

        ////////// Variables //////////

        "no-unused-vars": ["error", {
            "args": "after-used",
            "argsIgnorePattern": "[iI]gnored$"
        }],
        "no-negated-condition": 2,

        ////////// Style //////////

        "semi": ["error", "never"],
        "max-len": ["error", 120, 2, {"ignoreComments": true}],
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "jsx-quotes": ["error", "prefer-double"],
        "padded-blocks": ["off", "never"],
        "id-length": ["error", {"exceptions": ["b", "_"]}],
        "new-cap": ["error", {
            "newIsCap": true,
            "capIsNew": false,
            "capIsNewExceptions": ["R$", "List", "Map"]
        }],
        "no-multiple-empty-lines": ["error", { "max": 1 }],

        ////////// ECMAScript 6 //////////

        "arrow-body-style": [1],
        "arrow-parens": ["error", "as-needed", { "requireForBlockBody": false }],

        ////////// React //////////

        "react/jsx-indent-props": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/no-access-state-in-setstate": "error",
        "react/no-multi-comp": ["off", { "ignoreStateless": true }],
        "react/jsx-filename-extension": ["off"],
        "react/require-default-props": ["off"],
        "react/forbid-prop-types": ["off"],
        "react/require-extension": ["off"], // TODO update after airbnb solved issues
        "react/jsx-wrap-multilines": ["error", {
            "declaration": "parens-new-line",
            "assignment": "parens-new-line",
            "return": "parens-new-line",
            "arrow": "parens-new-line",
            "condition": "parens-new-line",
            "logical": "parens-new-line",
            "prop": "parens-new-line"
        }],

        ////////// A11Y //////////

        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "jsx-a11y/no-static-element-interactions": "off",

        ////////// Imports //////////

        "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": false}],
        "import/prefer-default-export": ["off"],

        ////////// FLOWTYPE //////////

        "flowtype-errors/show-errors": "error",
        "flowtype/delimiter-dangle": ["error", "always-multiline"]
    }
}

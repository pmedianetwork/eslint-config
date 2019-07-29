module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "airbnb",
    ],
    "plugins": [
        "no-only-tests"
    ],
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
        "id-length": ["error", {"exceptions": ["_", "x", "y", "z"]}],
        "new-cap": ["error", {
            "newIsCap": true,
            "capIsNew": false,
            "capIsNewExceptions": ["R$", "List", "Map"]
        }],
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        "function-paren-newline": "off",
        "object-curly-newline": "off",

        ////////// ECMAScript 6 //////////

        "arrow-body-style": [1],
        "arrow-parens": ["error", "as-needed", { "requireForBlockBody": false }],
        "prefer-destructuring": "off",

        ////////// React //////////

        "react/jsx-indent-props": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/no-access-state-in-setstate": "error",
        "react/no-multi-comp": ["off", { "ignoreStateless": true }],
        "react/jsx-filename-extension": ["off"],
        "react/require-default-props": ["off"],
        "react/forbid-prop-types": ["off"],
        "react/destructuring-assignment": ["off", "never"],
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
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/mouse-events-have-key-events": "off",
        "jsx-a11y/anchor-is-valid": "off",

        ////////// Imports //////////

        "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": false}],
        "import/prefer-default-export": ["off"],
    },
    "overrides": [
        {
            "files": ["**/*.test.*"],
            "env": {
                "jest": true
            },
            "rules": {
                "max-len": "off",
                "no-unused-expressions": "off",
                "no-useless-computed-key": "off", // flow does not support non-string property keys https://github.com/facebook/flow/issues/380
                "react/no-find-dom-node": "off"
            }
        },
        {
            "files": ["**/stories/**", "**/stories.*"],
            "rules": {
                "max-len": "off"
            }
        }
    ]
}

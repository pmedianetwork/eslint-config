const rule = require("../../../lib/rules/no-parent-imports");
const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module"
    },
});

const ruleTester = new RuleTester();

ruleTester.run("no-parent-imports", rule, {
    valid: [
        'import React from "react";',
        'import foo from "../foo";',
        'import foo from "foo";',
        'import foo from "foo/foo";',
    ],
    invalid: [
        {
            code: 'import foo from "../../../foo";',
            errors: [{
                message: rule.message,
            }]
        },
        {
            code: 'import foo from "../../foo";',
            errors: [{
                message: rule.message,
            }]
        },
    ]
});

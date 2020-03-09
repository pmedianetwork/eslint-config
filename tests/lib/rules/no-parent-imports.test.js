const RuleTester = require('eslint').RuleTester

const { noParentImports } = require('../../../lib/rules/no-parent-imports')

RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
})

const ruleTester = new RuleTester()

ruleTester.run('no-parent-imports', noParentImports, {
    valid: [
        'import React from "react";',
        'import foo from "../foo";',
        'import foo from "foo";',
        'import foo from "foo/foo";',
    ],
    invalid: [
        {
            code: 'import foo from "../../../foo";',
            errors: [
                {
                    message: noParentImports.message,
                },
            ],
        },
        {
            code: 'import foo from "../../foo";',
            errors: [
                {
                    message: noParentImports.message,
                },
            ],
        },
    ],
})

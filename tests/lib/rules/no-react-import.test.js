const RuleTester = require('eslint').RuleTester

const { noReactImport } = require('../../../lib/rules/no-react-import')

RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
})

const ruleTester = new RuleTester()

ruleTester.run('no-react-import', noReactImport, {
    valid: ['import * as React from "react";', 'import foo from "bar";', 'import Hello from "../";'],
    invalid: [
        {
            code: 'import React from "react";',
            errors: [
                {
                    message: noReactImport.message,
                },
            ],
        },
        {
            code: 'import Something from "react";',
            errors: [
                {
                    message: noReactImport.message,
                },
            ],
        },
    ],
})

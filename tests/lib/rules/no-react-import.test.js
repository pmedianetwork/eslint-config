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
    valid: ['import * as React from "react";'],
    invalid: [
        {
            code: 'import React from "react";',
            errors: [
                {
                    message: noReactImport.message,
                },
            ],
        },
    ],
})

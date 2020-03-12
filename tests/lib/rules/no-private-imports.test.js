const RuleTester = require('eslint').RuleTester
const { configKey, moduleNamespaces } = require('../../../lib/constants')

const { noPrivateImports } = require('../../../lib/rules/no-private-imports')

RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
})

const ruleTester = new RuleTester()

const moduleNamespaceExample = ['components', 'features', 'hooks', 'utils']

const makeTestItem = (path, errors) => ({
    code: path,
    settings: {
        [configKey]: {
            [moduleNamespaces]: moduleNamespaceExample,
        },
    },
    errors,
})

ruleTester.run('no-private-imports', noPrivateImports, {
    valid: [
        makeTestItem('import foo from "components/foo"'),
        makeTestItem('import foo from "meh/lar/ra"'),
        makeTestItem('import foo from "components"'),
        makeTestItem('import foo from "react"'),
        makeTestItem('import { foo } from "features"'),
        makeTestItem('import foo from "../foo"'),
    ],
    invalid: [
        makeTestItem('import { foo } from "features/foo/bar"', [
            {
                message: noPrivateImports.message,
            },
        ]),
        makeTestItem('import { foo } from "features/foo/bar/zar"', [
            {
                message: noPrivateImports.message,
            },
        ]),
        makeTestItem('import { foo } from "components/foo/bar/zar"', [
            {
                message: noPrivateImports.message,
            },
        ]),
    ],
})

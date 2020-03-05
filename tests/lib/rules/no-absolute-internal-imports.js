const { testFilePath } = require("../../../utils");
const rule = require("../../../lib/rules/no-absolute-internal-imports");
const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module"
    },
});

const ruleTester = new RuleTester();
ruleTester.run("no-absolute-internal-imports", rule, {
    valid: [
        {
            code: 'import foo from "react";',
            filename: testFilePath('/foo/bar/src/components/Foo/index.js'),
        },
        {
            code: 'import foo from "components";',
            filename: testFilePath('/foo/bar/src/components/Foo/index.js'),
        },
        {
            code: 'import foo from "utils/Foo";',
            filename: testFilePath('/foo/bar/src/components/Foo/index.js'),
        },
        {
            code: 'import foo from "utils/Foo/bar";',
            filename: testFilePath('/foo/bar/src/components/Foo/index.js'),
        },
        {
            code: 'import foo from ".";',
            filename: testFilePath('/foo/bar/src/components/Foo/index.js'),
        },
        {
            code: 'import foo from "components/Bar";',
            filename: testFilePath('/foo/bar/src/components/Foo/index.js'),
        },
        {
            code: 'import foo from "./utils";',
            filename: testFilePath('/foo/bar/src/components/Foo/index.js'),
        },
        {
            code: 'import foo from "./utils/common";',
            filename: testFilePath('/foo/bar/src/components/Foo/index.js'),
        },
        {
            code: 'import initStoryshots from "@storybook/addon-storyshots"',
            filename: testFilePath('src/storyshots.test.js'),
        },

    ],

    invalid: [
        {
            code: 'import foo from "components/Foo";',
            filename: testFilePath('/foo/bar/src/components/Foo/index.js'),
            errors: [{
                message: rule.message,
            }]
        },
        {
            code: 'import foo from "components/Foo/utils";',
            filename: testFilePath('src/components/Foo/index.js'),
            errors: [{
                message: rule.message,
            }]
        },
        {
            code: 'import foo from "components/Foo/utils/bar";',
            filename: testFilePath('src/components/Foo/index.js'),
            errors: [{
                message: rule.message,
            }]
        },
        {
            code: 'import foo from "components/Foo/utils/bar/baz";',
            filename: testFilePath('src/components/Foo/index.js'),
            errors: [{
                message: rule.message,
            }]
        },
    ]
});

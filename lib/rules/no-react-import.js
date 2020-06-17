const message = 'Please use "import * as React from \'react\'"'

module.exports.noReactImport = {
    message,
    meta: {
        docs: {
            description: 'This will disallow direct react import syntax',
            category: '',
            recommended: false,
        },
        fixable: false,
        schema: [],
    },

    create(context) {
        return {
            ImportDeclaration(node) {
                if (
                    node.specifiers.length === 1 &&
                    node.specifiers[0].type === 'ImportDefaultSpecifier' &&
                    node.source.value === 'react'
                ) {
                    context.report({
                        node,
                        message,
                    })
                }
            },
        }
    },
}

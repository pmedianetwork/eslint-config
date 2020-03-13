const { configKey, moduleNamespaces } = require('../constants')

const message = "Use module's public interface, or extract the feature"

module.exports.noPrivateImports = {
    message,
    meta: {
        docs: {
            description: 'This will disallow importing from inside of module',
            category: '',
            recommended: false,
        },
        fixable: null,
        schema: [],
    },

    create(context) {
        return {
            ImportDeclaration(node) {
                const importSourceParts = node.source.value.split('/')
                if (importSourceParts.length < 2) {
                    return
                }

                if (
                    !context.settings ||
                    !context.settings[configKey] ||
                    !context.settings[configKey][moduleNamespaces] ||
                    !Array.isArray(context.settings[configKey][moduleNamespaces])
                ) {
                    return
                }

                const namespaces = context.settings[configKey][moduleNamespaces]

                if (importSourceParts.length > 2 && namespaces.includes(importSourceParts[0]))
                    context.report({
                        node,
                        message,
                    })
            },
        }
    },
}

const message = "No imports from two or more levels up (../..)";

module.exports.noParentImports = {
    message,
    meta: {
        docs: {
            description: "This will disallow imports that contain ../..",
            category: "",
            recommended: false
        },
        fixable: null,
        schema: []
    },

    create: function (context) {
        return {
            ImportDeclaration(node) {
                if (node.source.value.includes('../..')) {
                    context.report({
                        node,
                        message,
                    })
                }
            },
        }
    },
};

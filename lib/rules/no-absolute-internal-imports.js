const relative = require('path').relative

const message = 'No internal modules imports with absolute path'

const getWithoutLastSegment = path => {
    const parts = path.split('/').reverse()
    const [_ignored, ...lastParts] = parts

    return lastParts.reverse().join('/')
}

const getRelativePath = filePath => {
    const relativePath = relative(process.cwd(), filePath)
    const [__ignored, ...relativeParts] = relativePath.split('/')

    return relativeParts.join('/')
}

const getHasError = (filePath, importSource) => {
    const relativeFileLocation = getRelativePath(getWithoutLastSegment(filePath))

    if (!relativeFileLocation) {
        return false
    }

    if (relativeFileLocation.split('/').length === 1) {
        return false
    }

    return importSource.indexOf(relativeFileLocation) === 0
}

module.exports.noAbsoluteInternalImports = {
    message,
    meta: {
        docs: {
            description: 'This will disallow absolute imports that contained in the same module',
            category: '',
            recommended: false,
        },
        fixable: null,
        schema: [],
    },

    create(context) {
        const filePath = context.getFilename()

        return {
            ImportDeclaration(node) {
                const importSource = node.source.value
                const hasError = getHasError(filePath, importSource)

                if (hasError) {
                    context.report({
                        node,
                        message,
                    })
                }
            },
        }
    },
}

module.exports.flow = {
    extends: ['prettier/flowtype', 'plugin:flowtype/recommended'],
    plugins: ['flowtype'],
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },
    rules: {
        'flowtype/delimiter-dangle': ['error', 'always-multiline'],
    },
}

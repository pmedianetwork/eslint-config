const { noAbsoluteInternalImports } = require('./lib/rules/no-absolute-internal-imports')
const { noParentImports } = require('./lib/rules/no-parent-imports')
const { noPrivateImports } = require('./lib/rules/no-private-imports')
const { noReactImport } = require('./lib/rules/no-react-import')
const { typescript } = require('./lib/configs/typescript')
const { flow } = require('./lib/configs/flow')
const { recommended } = require('./lib/configs/recommended')

module.exports = {
    configs: {
        typescript,
        recommended,
        flow,
    },
    rules: {
        'no-absolute-internal-imports': noAbsoluteInternalImports,
        'no-parent-imports': noParentImports,
        'no-private-imports': noPrivateImports,
        'no-react-import': noReactImport,
    },
}

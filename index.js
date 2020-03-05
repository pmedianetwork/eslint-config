const { noAbsoluteInternalImports } = require('./lib/rules/no-absolute-internal-imports')
const { noParentImports } = require('./lib/rules/no-parent-imports')
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
    },
}

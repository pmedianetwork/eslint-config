const requireIndex = require("requireindex");
const { typescript } = require('./lib/configs/typescript');
const { flow } = require('./lib/configs/flow');
const { recommended } = require('./lib/configs/recommended');

const rules = requireIndex(__dirname + "/lib/rules");

module.exports = {
    configs: {
        typescript,
        recommended,
        flow
    },
    rules
};



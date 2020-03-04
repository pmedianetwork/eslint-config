const { configs, rules } = require('../index');

const checkExists = input => {
    if (!input) {
        throw new Error('module is not defined')
    }
};

describe("main export", () => {
    it('has rules', () => {
        checkExists(rules);
        checkExists(rules['no-absolute-internal-imports']);
        checkExists(rules['no-parent-imports']);
    });

    it('has configs', () => {
        checkExists(configs);
        checkExists(configs.recommended);
        checkExists(configs.flow);
        checkExists(configs.typescript);
    })
})

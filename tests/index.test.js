const { configs, rules } = require('../index')
const { checkExists } = require('../utils')

describe('main export', () => {
    it('has rules', () => {
        checkExists(rules)
        checkExists(rules['no-absolute-internal-imports'])
        checkExists(rules['no-parent-imports'])
    })

    it('has configs', () => {
        checkExists(configs)
        checkExists(configs.recommended)
        checkExists(configs.flow)
        checkExists(configs.typescript)
    })

    it('has correct shapshot', () => {
        expect(configs.recommended).toMatchSnapshot()
        expect(configs.flow).toMatchSnapshot()
        expect(configs.typescript).toMatchSnapshot()
    })
})

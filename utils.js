const path = require('path')

module.exports = {
    testFilePath(relativePath) {
        return path.join(process.cwd(), relativePath)
    },
    checkExists: input => {
        if (!input) {
            throw new Error('module is not defined')
        }
    },
}

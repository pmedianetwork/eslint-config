const path = require('path');

module.exports = {
    testFilePath(relativePath) {
        return path.join(process.cwd(), relativePath)
    }
};

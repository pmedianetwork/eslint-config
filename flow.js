module.exports = {
  "extends": [
    "plugin:flowtype/recommended"
  ],
  "plugins": [
    "flowtype",
  ],
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    },
  },
  "rules": {
    "flowtype/delimiter-dangle": ["error", "always-multiline"]
  }
}

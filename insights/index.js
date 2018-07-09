module.exports = {
  "extends": [
    "@pmedianetwork/eslint-config",
  ],
  "plugins": [
    "flowtype",
    "flowtype-errors",
  ],
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    },
  },
  "rules": {
    "flowtype-errors/show-errors": "error",
    "flowtype/delimiter-dangle": ["error", "always-multiline"]
  }
}

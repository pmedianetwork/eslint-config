module.exports = {
  "settings": {
    "import/resolver": {
      "node": true,
      "eslint-import-resolver-typescript": true
    }
  },
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "parser": "typescript-eslint-parser",
      "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
      },
      "plugins": [
        "typescript"
      ],
      "rules": {
        "no-undef": "off",
        "no-unused-vars": "off"
      }
    }
  ]
}

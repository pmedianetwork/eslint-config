module.exports.typescript = {
    extends: ['prettier/@typescript-eslint'],
    settings: {
        'import/resolver': {
            node: true,
            'eslint-import-resolver-typescript': true,
        },
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 6,
                sourceType: 'module',
            },
            plugins: ['@typescript-eslint', '@pmedianetwork'],
            rules: {
                '@pmedianetwork/no-react-import': 'error',
                'consistent-return': 'off',
                'default-case': 'off',
                'no-restricted-syntax': ['error', { selector: 'TSEnumDeclaration', message: "Don't declare enums" }],
                'no-undef': 'off',
                'no-unused-expressions': 'off',
                'no-unused-vars': 'off',
                'react/prop-types': 'off',
                '@typescript-eslint/array-type': ['error', { default: 'generic', readonly: 'generic' }],
                '@typescript-eslint/ban-ts-ignore': 'error',
                '@typescript-eslint/ban-types': 'error',
                '@typescript-eslint/camelcase': 'off',
                '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-non-null-assertion': 'error',
                '@typescript-eslint/no-require-imports': 'error',
                '@typescript-eslint/no-unused-expressions': 'error',
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        vars: 'local',
                        varsIgnorePattern: '[iI]gnored$',
                        args: 'after-used',
                        argsIgnorePattern: '[iI]gnored$',
                    },
                ],
            },
        },
    ],
}

const baseRecommendedConfig = {
    parser: 'babel-eslint',
    extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:prettier/recommended'],
    plugins: ['no-only-tests', 'react-hooks'],
    env: {
        browser: true, // We write for browser
        node: true, // in CommonJS
        es6: true, // And we use ES6 features
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        // //////// Possible Errors //////////

        'no-console': 'error',
        'no-only-tests/no-only-tests': 'error',

        // //////// Best Practices //////////

        eqeqeq: ['error', 'always'],
        'guard-for-in': 'off',
        'no-param-reassign': ['error', { props: false }], // as long we have angular code, needed for $scope
        radix: ['off'],
        'no-use-before-define': ['error', { functions: false }],
        'prettier/prettier': 'error',

        // //////// Variables //////////

        'no-unused-vars': [
            'error',
            {
                args: 'after-used',
                argsIgnorePattern: '[iI]gnored$',
                vars: 'local',
                varsIgnorePattern: '[iI]gnored$',
            },
        ],
        'no-negated-condition': 2,

        // //////// Style //////////

        'id-length': ['error', { exceptions: ['_', 'x', 'y', 'z'] }],
        'new-cap': [
            'error',
            {
                newIsCap: true,
                capIsNew: false,
                capIsNewExceptions: ['R$', 'List', 'Map'],
            },
        ],
        'no-unused-expressions': ['error', { allowTernary: true }],

        // //////// ECMAScript 6 //////////

        'arrow-body-style': ['error', 'as-needed'],
        'prefer-destructuring': 'off',

        // //////// React //////////

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/no-access-state-in-setstate': 'error',
        'react/no-multi-comp': ['off', { ignoreStateless: true }],
        'react/no-this-in-sfc': 'off',
        'react/jsx-filename-extension': ['off'],
        'react/require-default-props': ['off'],
        'react/forbid-prop-types': ['off'],
        'react/destructuring-assignment': ['off', 'never'],
        'react/jsx-no-useless-fragment': 'error',

        // //////// A11Y //////////

        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/mouse-events-have-key-events': 'off',
        'jsx-a11y/anchor-is-valid': 'off',

        // //////// Imports //////////

        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true, optionalDependencies: false }],
        'import/prefer-default-export': ['off'],
        'import/no-useless-path-segments': 'error',
    },
    overrides: [
        {
            files: ['**/*.test.*'],
            env: {
                jest: true,
            },
            rules: {
                'max-len': 'off',
                'no-unused-expressions': 'off',
                'no-useless-computed-key': 'off', // flow does not support non-string property keys https://github.com/facebook/flow/issues/380
                'react/no-find-dom-node': 'off',
            },
        },
        {
            files: ['**/stories/**', '**/stories.*'],
            rules: {
                'max-len': 'off',
            },
        },
    ],
}

const customRules = {
    plugins: ['@pmedianetwork', ...baseRecommendedConfig.plugins],
    rules: {
        ...baseRecommendedConfig.rules,
        '@pmedianetwork/no-absolute-internal-imports': 1,
        '@pmedianetwork/no-parent-imports': 1,
    },
}

module.exports.baseRecommendedConfig = baseRecommendedConfig
module.exports.recommended = Object.assign({}, baseRecommendedConfig, customRules)

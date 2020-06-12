module.exports = {
    extends: [
        'react-app',
        'airbnb',
        'plugin:jsx-a11y/recommended',
        'prettier',
        'prettier/react',
    ],
    plugins: [
        'jsx-a11y',
        'prettier'
    ],
    rules: {
        'react/jsx-indent': [2, 'tab'],
        'react/jsx-indent-props': [2, 'tab'],
        'react/jsx-one-expression-per-line': [0],

        // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
        // Use default export only for pages!
        'import/prefer-default-export': 'off',

        'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' }
    ],
        'jsx-a11y/anchor-is-valid': ['error', {
        'components': ['Link'],
        'aspects': ['invalidHref', 'preferButton'],
    }],
        'object-curly-newline': ['error', {
        'ImportDeclaration': { 'multiline': true, 'minProperties': 6 },
        'ExportDeclaration': { 'multiline': true, 'minProperties': 6 }
    }],
        'quotes': [2, 'single'],
        'brace-style': ["error", "1tbs", { "allowSingleLine": true }],
        "indent": ["error", "tab"],
        'no-multiple-empty-lines': ['error', { 'max': 1 }],
        'no-unused-vars': ['error'],
        'no-param-reassign': ['error', { 'props': false }],
    },
};

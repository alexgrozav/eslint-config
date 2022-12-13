module.exports = {
    env: {
        node: true,
        jest: true,
        browser: true,
        es2021: true
    },
    extends: [
        'standard',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            globalReturn: true
        }
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        semi: ['warn', 'always'],
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-prototype-builtins': 'off',
        'max-params': 'off',
        'indent': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-case-declarations': 'off',
        'max-nested-callbacks': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
};

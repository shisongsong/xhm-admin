module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        // 解析es最新特性
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        // 'plugin:react-hooks/recommended',
        // [Exactly what does plugin:prettier/recommended do](https://www.npmjs.com/package/eslint-plugin-prettier)
        //      `'plugin:prettier/recommended'` has already include `"plugins": ["prettier"]`
        //      Then you need to add plugin:prettier/recommended as the last extension in your .eslintrc.json
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
    },
    rules: {
        // react
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        // typescript
        '@typescript-eslint/no-var-requires': 'off',
        // TODO this is not reasonable
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
    },
    settings: {
        // 让 eslint-plugin-react 自动检测要使用的React的版本
        react: {
            version: 'detect',
        },
    },
};

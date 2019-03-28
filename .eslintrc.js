module.exports = {
    globals: {},
    extends: ["@deloitte-digital-au/eslint-config"],
    env: {
        commonjs: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            globalReturn: false,
        },
        sourceType: 'module',
    },
    overrides: [
        {
            // disable certain rules for testing as testing is messy business
            files: [
                'src/**/*.spec.ts',
                'src/**/*.spec.tsx',
                'src/**/*.test.ts',
                'src/**/*.test.tsx',
                'src/**/__mocks__/**/*',
                'src/**/__mock__/**/*',
                'test/**/*',
            ],
            rules: {
                'typescript/no-explicit-any': 'off',
                'typescript/no-non-null-assertion': 'off',
                'import/prefer-default-export': 'off',
                'max-len': 'off',
                strict: 'off',
            },
        },
        {
            // disable certain rules for typings as eslint misdetects them
            files: [
                '**/*.d.ts',
            ],
            rules: {
                'typescript/no-explicit-any': 'off',
                strict: 'off',
            },
        },
        {
            files: [
                'src/**/*.tsx',
            ],
            rules: {
                // We don't need this as this is caught by typescript compiler
                'no-unused-vars': [
                    'off',
                    {
                        vars: 'all',
                        args: 'after-used',
                        ignoreRestSiblings: true,
                    },
                ],
                semi: [
                    'error',
                    'never',
                ],
            },
        }
    ],
}

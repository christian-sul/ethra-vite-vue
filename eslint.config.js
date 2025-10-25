import js from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
// import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        ignores: [
            'dist/**',
            'node_modules/**',
            '*.config.js',
            'vite.config.*',
        ],
    },
    {
        files: ['src/**/*.{js,mjs,cjs,vue}'],
        extends: [
            js.configs.recommended,
            pluginVue.configs['flat/recommended'],
        ],
        plugins: {
            // prettier,
        },
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            // 'prettier/prettier': 'warn',
            'vue/attributes-order': 'off',
            'vue/html-indent': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/multiline-html-element-content-newline': 'off',
        },
    },
]);

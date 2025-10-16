import pluginImport from 'eslint-plugin-import'
import reactDom from 'eslint-plugin-react-dom'
import reactX from 'eslint-plugin-react-x'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['dist', 'coverage']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Strictest type-checked and stylistic rules
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      // React-specific lint rules
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    plugins: {
      import: pluginImport,
    },
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'import/first': 'error',
    },
  },
  {
    files: ['vite.config.ts', 'vitest.config.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.config.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])

import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import pluginImport from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';
import { globalIgnores } from 'eslint/config';

export default tseslint.config(globalIgnores(['dist', './vite.config.ts']), {
	files: ['**/*.{ts,tsx}'],
	extends: [
		tseslint.configs.recommended,
		reactHooks.configs['recommended-latest'],
		reactRefresh.configs.vite,
		pluginImport.flatConfigs.recommended,
		prettier,
	],
	languageOptions: {
		ecmaVersion: 2020,
		globals: globals.browser,
		parserOptions: {
			project: './tsconfig.app.json',
		},
	},
	rules: {
		// Custom overrides
		'no-console': ['warn'],
		'prefer-const': 'warn',
		'import/no-unresolved': 'error',
	},
});

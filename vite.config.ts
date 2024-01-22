import { createLibConfig } from '@nextcloud/vite-config'
import { po as poParser } from 'gettext-parser'
import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { createRequire } from 'node:module'

import type { Plugin } from 'vite'

const translations = Object.fromEntries(readdirSync('./l10n')
	.filter((name) => name !== 'messages.pot' && name.endsWith('.pot'))
	.map((file) => {
		const path = './l10n/' + file
		const locale = file.slice(0, -'.pot'.length)

		const po = readFileSync(path)
		const json = poParser.parse(po)
		// compress by removing unneeded information
		delete json.headers
		delete json.translations['']['']
		Object.keys(json.translations['']).forEach((key) => {
			delete json.translations[''][key].comments
		})

		return [
			locale,
			json,
		]
	}))

/**
 * Adds all moment.js locale imports to the bundle
 */
function momentAllLocalesPlugin(): Plugin {
	return {
		name: 'moment-all-locales',
		async transform(code) {
			const require = createRequire(import.meta.url)
			const momentPath = join(dirname(require.resolve('moment')), 'dist', 'locale')
			const localeFiles = readdirSync(momentPath)
			const localeImports = localeFiles
				.filter((name) => name.endsWith('.js'))
				.map((name) => `import 'moment/dist/locale/${name}'`)
				.join('\n')
			return localeImports + '\n' + code
		},
	}
}

export default createLibConfig({
	index: 'lib/index.ts',
}, {
	libraryFormats: ['es', 'cjs'],
	replace: {
		LOCALES: JSON.stringify(translations),
	},
	config: {
		plugins: [
			momentAllLocalesPlugin(),
		],
		test: {
			environment: 'jsdom',
		},
	},
})

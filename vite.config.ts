/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import { createLibConfig } from '@nextcloud/vite-config'
import { readFileSync, readdirSync } from 'node:fs'
import { po as poParser } from 'gettext-parser'

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
			json
		]
	}))

export default createLibConfig({
	index: 'lib/index.ts',
}, {
	libraryFormats: ['es', 'cjs'],
	replace: {
		LOCALES: JSON.stringify(translations)
	},
})

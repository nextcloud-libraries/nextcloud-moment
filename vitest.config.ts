/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import config from './vite.config'

export default async (env) => {
	const cfg = await config(env)
	// remove the node externals plugin that interferes with vitest
	cfg.plugins = cfg.plugins!.filter((plugin) => plugin && 'name' in plugin && plugin.name !== 'node-externals')
	return {
		...cfg,
		test: {
			environment: 'jsdom',
		},
	}
}

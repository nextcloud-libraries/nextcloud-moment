/*!
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

interface Translations {
	locale: string
	json: object
}

declare const LOCALES: Translations[]

declare module 'moment/min/moment-with-locales.js' {
	import moment from 'moment'
	export default moment
}

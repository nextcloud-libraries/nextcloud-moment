/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import moment from 'moment/min/moment-with-locales.js'
import { getLocale } from '@nextcloud/l10n'
import { getGettextBuilder } from '@nextcloud/l10n/gettext'

const locale = getLocale()
const translations = LOCALES

moment.locale(locale)

// Only update the locale of moment.js if it's available. Moment.js ships more locales than we
// track in transifex, so we prefer the included translation. Always prefer our default english
// translation.
if (locale === 'en' || locale in translations) {
	const gt = getGettextBuilder()
		.setLanguage(locale)
		.addTranslation(locale, translations[locale])
		.build()

	moment.updateLocale(moment.locale(), {
		relativeTime: {
			s: gt.gettext('seconds'),
		},
	})
}

export default moment

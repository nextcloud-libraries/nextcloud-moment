import moment from 'moment/min/moment-with-locales.js'
import Gettext from 'node-gettext'
import { getLocale } from '@nextcloud/l10n'

const locale = getLocale()
const translations = LOCALES

moment.locale(locale)

// Only update the locale of moment.js if it's available. Moment.js ships more locales than we
// track in transifex, so we prefer the included translation. Always prefer our default english
// translation.
if (locale === 'en' || locale in translations) {
	const gt = new Gettext()
	gt.addTranslations(locale, 'messages', translations[locale])
	gt.setLocale(locale)

	moment.updateLocale(moment.locale(), {
		relativeTime: {
			s: gt.gettext('seconds'),
		},
	})
}

export default moment

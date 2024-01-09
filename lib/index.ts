import moment from 'moment'
import Gettext from 'node-gettext'
import { getLocale } from '@nextcloud/l10n'

const gt = new Gettext()

const locale = getLocale()
LOCALES.forEach((data) => {
	gt.addTranslations(data.locale, 'messages', data.json)
})
gt.setLocale(locale)
// eslint-disable-next-line import/no-named-as-default-member
moment.locale(locale)

// Only update the locale of moment.js if it's available. Moment.js ships more locales than we
// track in transifex, so we prefer the included translation. Always prefer our default english
// translation.
if (locale === 'en' || LOCALES.find(data => data.locale === locale)) {
	// eslint-disable-next-line import/no-named-as-default-member
	moment.updateLocale(moment.locale(), {
		relativeTime: {
			s: gt.gettext('seconds'),
		},
	})
}

export default moment

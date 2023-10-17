import moment from 'moment'
import Gettext from 'node-gettext'
import { getLocale } from '@nextcloud/l10n'

const gt = new Gettext()

const locale = getLocale()
LOCALES.map(data => {
    gt.addTranslations(data.locale, 'messages', data.json)
})
gt.setLocale(locale)
moment.locale(locale)

// Only update the seconds translation if it's available. Moment.js ships more locales than we
// track in transifex, so we prefer the original translation. Always use the english translations.
if (locale.startsWith('en') || gt.gettext('seconds') !== 'seconds') {
    moment.updateLocale(moment.locale(), {
        relativeTime: {
            s: gt.gettext('seconds'),
        },
    })
}

export default moment

import moment from 'moment'
import { getLocale, translate } from '@nextcloud/l10n'

function t(text: string): string {
    return translate('nextcloud-moment', text)
}

moment.locale(getLocale())

/*
TODO: make it work
moment.updateLocale(
    getLocale(), // moment.locale()?
    {
        parentLocale: getLocale(), // moment.locale()?
        relativeTime: Object.assign(
            // @ts-ignore
            moment.localeData(getLocale())._relativeTime,
            {
                s: t('seconds ago'),
            }
        )
    })
*/

export default moment

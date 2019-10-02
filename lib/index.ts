import moment from 'moment'
import { getLocale, translate } from '@nextcloud/l10n'

function t(text: string): string {
    return translate('nextcloud-moment', text)
}

moment.locale(getLocale())

moment.updateLocale(
    getLocale(),
    {
        parentLocale: getLocale(),
        relativeTime: Object.assign(
            // @ts-ignore
            moment.localeData(getLocale())._relativeTime,
            {
                s: t('seconds ago'),
            }
        )
    })

export default moment

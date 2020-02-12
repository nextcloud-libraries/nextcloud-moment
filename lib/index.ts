import moment from 'moment'
import { getLocale, translate } from '@nextcloud/l10n'

function t(text: string): string {
    return translate('nextcloud-moment', text)
}

moment.locale(getLocale())

moment.updateLocale(
    moment.locale(),
    {
        parentLocale: moment.locale(),
        relativeTime: Object.assign(
            // @ts-ignore
            moment.localeData(moment.locale())._relativeTime,
            {
                s: t('seconds'),
            }
        )
    })

export default moment

interface Translations {
	locale: string
	json: object
}

declare const LOCALES: Translations[]

declare module 'moment/min/moment-with-locales.js' {
	import moment from 'moment'
	export default moment
}

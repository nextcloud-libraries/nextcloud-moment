import moment from '../lib/index'

test('export is a function', () => {
    expect(typeof moment).toBe('function')
})

test('create instance', () => {
    moment()
})

test('from now', () => {
    expect(moment().fromNow()).not.toBe(undefined)
})

test('seconds ago', () => {
    expect(moment().fromNow()).toBe('seconds ago')
})

describe('locale', () => {

    let locale

    beforeEach(() => {
        locale = moment.locale()
    })

    afterEach(() => {
        moment.locale(locale)
    })

    test('locale', () => {
        expect(moment().locale()).toBe('en')
    })

    test('locale 2', () => {
        expect(moment.locale()).toBe('en')
    })

    test('works with custom locale - underscore', () => {
        moment.locale('de_AT')

        expect(moment.locale()).toBe('de-at')
    })

    test('works with custom locale - dash', () => {
        moment.locale('de-AT')

        expect(moment.locale()).toBe('de-at')
    })

})

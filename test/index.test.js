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
    // TODO: fix
    //expect(moment().fromNow()).toBe('seconds ago')
})

test('locale', () => {
    expect(moment().locale()).toBe('en')
})

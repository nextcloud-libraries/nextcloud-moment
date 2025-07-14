/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import moment from '../lib/index.ts'

describe('moment', () => {
	it('exports a function', () => {
		expect(typeof moment).to.equal('function')
	})

	it('creates an instance', () => {
		moment()
	})

	describe('from now', () => {
		it('shows something for from now', () => {
			expect(moment().fromNow()).not.to.equal(undefined)
		})

		it('shows the short message seconds ago', () => {
			expect(moment().fromNow()).to.equal('a few seconds ago')
		})
	})

	describe('locale', () => {
		let locale

		beforeEach(() => {
			locale = moment.locale()
		})

		afterEach(() => {
			moment.locale(locale)
		})

		it('locale', () => {
			expect(moment().locale()).to.equal('en')
		})

		it('locale 2', () => {
			expect(moment.locale()).to.equal('en')
		})

		it('works with custom locale - underscore', () => {
			moment.locale('de_AT')

			expect(moment.locale()).to.equal('de-at')
		})

		it('works with custom locale - dash', () => {
			moment.locale('de-AT')

			expect(moment.locale()).to.equal('de-at')
		})

		it('shows correct french translation', () => {
			moment.locale('fr')

			expect(moment().fromNow()).to.equal('il y a quelques secondes')
		})
	})
})

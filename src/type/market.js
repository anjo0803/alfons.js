/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

const {
	NSFactory,
	convertNumber
} = require('../factory');
const types = require('../types');

/**
 * @type {import('../factory').FactoryConstructor<types.Market>}
 * @ignore
 */
exports.create = (root) => new NSFactory()
	.onTag('NATION', (me) => me
		.build('nation'))
	.onTag('PRICE', (me) => me
		.build('bank', convertNumber))
	.onTag('TYPE', (me) => me
		.build('isAsk', val => val === 'ask'))
	.onTag('TIMESTAMP', (me) => me
		.build('timestamp', convertNumber));

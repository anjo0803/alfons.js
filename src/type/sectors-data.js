/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

const {
	NSFactory,
	convertNumber
} = require('../factory');

/**
 * Container object for data on the composition of a nation's GDP, by percent
 * generated by sector.
 * @typedef {object} SectorsData
 * @prop {number} blackMarket Percent generated by black market activity.
 * @prop {number} government Percent generated by direct government activity.
 * @prop {number} private Percent generated by privately-owned industry.
 * @prop {number} stateOwned Percent generated by state-owned industry.
 */
/**
 * @arg {import('../factory').Attributes} root Attributes on the factory's root
 * @returns {NSFactory<SectorsData>} A new `SectorsData` factory
 */
exports.create = root => new NSFactory()
	.onTag('BLACKMARKET', me => me
		.build('blackMarket', convertNumber))
	.onTag('GOVERNMENT', me => me
		.build('government', convertNumber))
	.onTag('INDUSTRY', me => me
		.build('private', convertNumber))
	.onTag('PUBLIC', me => me
		.build('stateOwned', convertNumber));

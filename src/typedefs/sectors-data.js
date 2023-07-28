const { num } = require('../requests/converter');

/**
 * Container object for data on contribution to a nation's GDP by percentage per sector.
 * @typedef {object} SectorsData
 * @prop {number} blackMarket Percentage of GDP generated by black market activity.
 * @prop {number} government Percentage of GDP generated by direct government activity.
 * @prop {number} private Percentage of GDP generated by privately-owned industry.
 * @prop {number} stateOwned Percentage of GDP generated by state-owned industry.
 */
/**
 * Builds a sectors data object from the provided parsed response XML.
 * @param {object} root The root object - the `<SECTORS>` tag in the parsed XML object.
 * @returns {SectorsData} The built sectors data object.
 * @ignore
 */
exports.parseSectors = (root) => {
	return {
		blackMarket:num(root, 'BLACKMARKET'),
		government:	num(root, 'GOVERNMENT'),
		private:	num(root, 'INDUSTRY'),
		stateOwned:	num(root, 'PUBLIC')
	};
}

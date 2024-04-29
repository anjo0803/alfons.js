/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

/**
 * A generic NationScript-related `Error`.
 */
class NSError extends Error {
	/**
	 * Instantiates a new {@linkcode NSError}.
	 * @param {string} message Error message to display
	 */
	constructor(message = 'Internal error') {
		super(message);
		this.name = this.constructor.name;
	}
}

/**
 * An {@linkcode NSError} related to a failure in communications with the
 * NationStates API.
 */
class APIError extends NSError {
	/**
	 * Instantiates a new {@linkcode APIError}.
	 * @param {string} message Error message to display.
	 */
	constructor(message) {
		super('API error: ' + message);
	}
}

/**
 * An {@linkcode APIError} indicating that a queried entity, e.g. a nation or
 * region, has not been found by the NationStates API.
 */
class EntityNotFoundError extends APIError {
	/**
	 * Instantiates a new {@linkcode EntityNotFoundError}.
	 * @param {string} entity Name of the unsuccessfully queried entity
	 */
	constructor(entity) {
		super('Entity not found: ' + entity);
	}
}

/**
 * An {@linkcode APIError} indicating that an attempted nation login failed.
 * @todo
 */
class LoginError extends APIError {
	constructor(message) {
		super(message);
	}
}

/**
 * An {@linkcode APIError} indicating that the legal rate limit was exceeded.
 */
class RatelimitError extends APIError {
	/**
	 * The number of seconds the API has indicated to wait before resuming requests.
	 * @type {number}
	 */
	retry;
	/**
	 * 
	 * @arg {string|number} retry 
	 */
	constructor(retry = '30') {
		super(`Ratelimit exceeded; retry in ${retry} s`);
		this.retry = typeof retry === 'number' ? retry : parseInt(retry);
	}
}

/**
 * An {@linkcode NSError} indicating that a particular property ...
 * @todo
 */
class PropertyError extends NSError {
	constructor(property, expected, supplied) {
		super(`Faulty property ${property}: ${supplied} (expected ${expected})`);
	}
}

class PropertyMissingError extends NSError {
	/**
	 * 
	 * @arg {string} property 
	 * @arg {?string} parent 
	 */
	constructor(property, parent = null) {
		super('Missing property: '
			+ (parent === null ? parent + '.' : '')
			+ property);
	}
}

class PropertyInvalidError extends NSError {
	constructor(propertyName, propertyValue, parent = null) {
		super(`Invalid property: ${(parent === null ? parent + '.' : '')
			+ propertyName} (${propertyValue})`);
	}
}

class DumpNotModifiedError extends APIError {
	constructor() {
		super('Dump not modified');
	}
}

class VirtualError extends NSError {
	/**
	 * 
	 * @param {Function} func 
	 * @param {?Function} parent 
	 */
	constructor(func, parent = null) {
		super('Virtual function not implemented: '
			+ (parent !== null ? parent.name + '.' : '')
			+ func.name);
	}
}

class ProductWithheldError extends NSError {
	constructor() {
		super('Factory withheld still-work-in-progress product');
	}
}

class FactoryFinalisedError extends NSError {
	constructor() {
		super('Finalised factory refused to process data');
	}
}

exports.NSError = NSError;
exports.APIError = APIError;
exports.EntityNotFoundError = EntityNotFoundError;
exports.LoginError = LoginError;
exports.RatelimitError = RatelimitError;
exports.PropertyError = PropertyError;
exports.PropertyMissingError = PropertyMissingError;
exports.PropertyInvalidError = PropertyInvalidError;
exports.DumpNotModifiedError = DumpNotModifiedError;
exports.VirtualError = VirtualError;
exports.ProductWithheldError = ProductWithheldError;
exports.FactoryFinalisedError = FactoryFinalisedError;

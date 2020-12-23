"use strict"

const assertInteger = value => {
	if (!Number.isInteger(value)) {
		throw new TypeError(`Expected an integer, got ${typeof value}`)
	}
}

module.exports = (base, exponent, modulus) => {
	assertInteger(base)
	assertInteger(exponent)
	assertInteger(modulus)

	if (modulus === 1) {
		return 0
	}

	base %= modulus

	let result = 1

	while (exponent > 0) {
		if (exponent % 2 === 1) {
			result = (result * base) % modulus
		}

		exponent >>= 1
		base = (base * base) % modulus
	}

	return result
}

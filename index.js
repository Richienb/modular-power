function assertInteger(value) {
	if (!Number.isInteger(value)) {
		throw new TypeError(`Expected an integer, got ${typeof value}`);
	}
}

function assertBigInt(value) {
	if (typeof value !== 'bigint') {
		throw new TypeError(`Expected a BigInt, got ${typeof value}`);
	}
}

function modularPowerNumber(base, exponent, modulus) {
	assertInteger(exponent);
	assertInteger(modulus);

	if (modulus === 1) {
		return 0;
	}

	base %= modulus;

	let result = 1;

	while (exponent > 0) {
		if (exponent % 2 === 1) {
			result = (result * base) % modulus;
		}

		exponent >>= 1; // eslint-disable-line no-bitwise
		base = (base ** 2) % modulus;
	}

	return result;
}

function modularPowerBigInt(base, exponent, modulus) {
	assertBigInt(exponent);
	assertBigInt(modulus);

	if (modulus === 1n) {
		return 0n;
	}

	base %= modulus;

	let result = 1n;

	while (exponent > 0n) {
		if (exponent % 2n === 1n) {
			result = (result * base) % modulus;
		}

		exponent >>= 1n; // eslint-disable-line no-bitwise
		base = (base ** 2n) % modulus;
	}

	return result;
}

export default function modularPower(base, exponent, modulus) {
	if (typeof base === 'number') {
		return modularPowerNumber(base, exponent, modulus);
	}

	if (typeof base === 'bigint') {
		return modularPowerBigInt(base, exponent, modulus);
	}

	throw new TypeError(`Expected a number or BigInt, got ${typeof base}`);
}

import test from 'ava';
import modularPower from './index.js';

test('main', t => {
	t.is(modularPower(2, 3, 3), 2);
	t.is(modularPower(2, 3, 5), 3);
});

test('bigint', t => {
	t.is(modularPower(2n, 3n, 3n), 2n);
	t.is(modularPower(2n, 3n, 5n), 3n);
});

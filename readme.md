# modular-power

Find the modulo of a number raised to a power. Similar to the [`pow()`](https://docs.python.org/3/library/functions.html#pow) function in Python.

## Install

```sh
npm install modular-power
```

## Usage

```js
import modularPower from 'modular-power';

modularPower(2, 3, 3);
//=> 2

modularPower(2, 3, 5);
//=> 3
```

## API

### modularPower(base, exponent, modulus)

The type of return value and arguments is determined by whether `base` is a `number` or `BigInt`.

#### base

The number to be raised to an exponent.

#### exponent

The exponent to apply to the base.

#### modulus

The modulus to apply to the exponent of the base.

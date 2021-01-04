# modular-power [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/modular-power/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/modular-power)

Find the modulo of a number raised to a power. Similar to the [`pow()`](https://docs.python.org/3/library/functions.html#pow) function in Python.

[![NPM Badge](https://nodei.co/npm/modular-power.png)](https://npmjs.com/package/modular-power)

## Install

```sh
npm install modular-power
```

## Usage

```js
const modularPower = require("modular-power")

modularPower(2, 3, 3)
//=> 2

modularPower(2, 3, 5)
//=> 3
```

## API

### modularPower(base, exponent, modulus)

#### base

Type: `number`

The base number to get the exponent of.

#### exponent

Type: `number`

The exponent to apply to the base.

#### modulus

Type: `number`

The modulus to apply to the exponent of the base.

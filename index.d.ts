/**
Find the modulo of a number raised to a power.

@param base The base number to get the exponent of.
@param exponent The exponent to apply to the base.
@param modulus The modulus to apply to the exponent of the base.

@example
```
const modularPower = require("modular-power")

modularPower(2, 3, 3)
//=> 2

modularPower(2, 3, 5)
//=> 3
```
*/
declare function modularPower(base: number, exponent: number, modulus: number): number

export = modularPower

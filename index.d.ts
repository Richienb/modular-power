/**
Find the modulo of a number raised to a power.

@param base The number to be raised to an exponent.
@param exponent The exponent to apply to the base.
@param modulus The modulus to apply to the exponent of the base.

@example
```
import modularPower from 'modular-power';

modularPower(2, 3, 3);
//=> 2

modularPower(2, 3, 5);
//=> 3
```
*/
declare function modularPower(base: number, exponent: number, modulus: number): number;
declare function modularPower(base: BigInt, exponent: BigInt, modulus: BigInt): BigInt;

export default modularPower;

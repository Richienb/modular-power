import {expectType} from 'tsd';
import modularPower from './index.js';

expectType<number>(modularPower(2, 3, 3));
expectType<BigInt>(modularPower(2n, 3n, 3n));

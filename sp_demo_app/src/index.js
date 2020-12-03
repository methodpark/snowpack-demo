import { add } from '@zaphod1984/sp_demo_dep_cjs';
import { sub } from '@zaphod1984/sp_demo_dep_esm';

import { square } from './lib/math';

const number1 = 21;
const number2 = 8;

document.getElementById('root').innerHTML = `
    the sum of ${number1} and ${number2} is ${add(number1, number2)}<br>
    the difference of ${number1} and ${number2} is ${sub(number1, number2)}<br>
    the square root of ${number1} is ${square(number1)}
`;
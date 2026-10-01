//operator ตัวดําเนินการ
// + - * / ** 
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 ** 3);
console.log(10 % 3);
console.log('***************************');

// == === != !== > < >= <=
console.log(10 == 10);
console.log(10 == '10');
console.log(10 === '10');
console.log('sau' > 'SAU');
console.log('Sombat' < 'Somjai');
console.log('Io5T' <= 'I37');
console.log('***************************');

// && || ! 
console.log(true && true);
console.log(true && false);
console.log(true || true);
console.log(true || false);
console.log(!true);
console.log(!false);
console.log('***************************');

// Increment Decrement
let num = 10, num2 = 20;
console.log(++num);
console.log(--num2);
console.log(num);
console.log('***************************');

//ternary operator
let score = 35;
console.log(score >= 40 ? 'pass' : 'not pass');

//nullish coalescing operator
let x = 30;
let y = null;
console.log(x && 'wow');
console.log(y && 'hi...');

console.log('***************************');
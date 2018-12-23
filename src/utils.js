// commom
export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

// makers
export const makeCheckMultipleOf = multiple => n => n % multiple === 0;
export const checkMultipleOf2 = makeCheckMultipleOf(2);
export const checkMultipleOf3 = makeCheckMultipleOf(3);
export const checkMultipleOf5 = makeCheckMultipleOf(5);

// Number -> Number
export const sum1ToN = n => (n * (n + 1)) / 2;

// Number[] -> Number
export const sum = arr => arr.reduce((a, c) => a + c, 0);

// Number[] -> Number[]
export const keepEven = arr => arr.filter(checkMultipleOf2);

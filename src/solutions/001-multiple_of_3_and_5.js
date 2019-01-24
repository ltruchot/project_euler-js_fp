"use strict";
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/
import { checkMultipleOf3, checkMultipleOf5, sum1ToN } from "../utils";
// intuition
// warning: removed Tail Call Optimization in V8 will cause exeeded call stack on 10000+
export const getMultiplesOf3And5 = (max, total = 0, curr = 1) =>
  curr >= max
    ? total
    : getMultiplesOf3And5(
        max,
        checkMultipleOf3(curr) || checkMultipleOf5(curr) ? total + curr : total,
        ++curr
      );

// math (100x faster)
const makeSumMultiples = limit => a => sum1ToN(Math.floor((limit - 1) / a)) * a;
const makeCombineSumMultiples = arr => limit => {
  const sumMulUntilLimit = makeSumMultiples(limit);
  return (
    arr.reduce((a, c) => a + sumMulUntilLimit(c), 0) -
    sumMulUntilLimit(arr.reduce((a, c) => a * c, 1))
  );
};
export const bestMultiplesOf3And5 = makeCombineSumMultiples([3, 5]);

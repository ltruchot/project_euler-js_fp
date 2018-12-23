/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

// mine
export const getLargestPrimeFactor = (n, factor = 2) => {
  while (factor) {
    const prod = n / factor;
    if (prod === 1) {
      return factor;
    } else if (Number.isInteger(prod)) {
      return getLargestPrimeFactor(prod, factor);
    } else {
      factor++;
    }
  }
};

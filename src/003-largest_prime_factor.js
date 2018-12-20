/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

// mine
export const largestPrimeFactor = n => {
  let pf = [];
  for (let i = 0; i < n; i++) {
    if (Number.isInteger(n / i)) {
      pf.push(i);
    }
  }
  return nbs;
};

console.log(largestPrimeFactor(600851475143));

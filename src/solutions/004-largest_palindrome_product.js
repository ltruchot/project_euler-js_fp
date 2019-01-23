/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/
export const getLargestPalindromeProduct = digitNbr => {
  let max = Math.pow(10, digitNbr) - 1;
  let bigestPalindrome = 0;
  for (let i = max; i > 0; i--) {
    for (let j = max; j > 0; j--) {
      const prod = j * i;
      const firsts = String(prod).substring(0, digitNbr);
      const revertedSeconds = String(prod)
        .substring(digitNbr)
        .split("")
        .reverse()
        .join("");
      if (
        firsts === revertedSeconds &&
        +(firsts + revertedSeconds) > bigestPalindrome
      ) {
        bigestPalindrome = prod;
      }
    }
  }
  return bigestPalindrome;
};
console.log(getLargestPalindromeProduct(3));

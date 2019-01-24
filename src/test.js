import {
  getMultiplesOf3And5,
  bestMultiplesOf3And5
} from "./solutions/001-multiple_of_3_and_5";
import { getEvenFibonnacciNumbers } from "./solutions/002-even_fibonacci_numbers";
import { getLargestPrimeFactor } from "./solutions/003-largest_prime_factor";
import { getLargestPalindromeProduct } from "./solutions/004-largest_palindrome_product";
describe("Project Euler", () => {
  it(`001 - Multiples of 3 and 5`, () => {
    // intuition
    expect(getMultiplesOf3And5(10)).toBe(23);
    // expect(getMultiplesOf3And5(1000)).toBe(233168);
    // math
    expect(bestMultiplesOf3And5(10)).toBe(23);
    // expect(bestMultiplesOf3And5(1000)).toBe(233168);
  });
  it(`002 - Combine fibonacci numbers`, () => {
    // intuition
    expect(getEvenFibonnacciNumbers(90)).toBe(44);
    expect(getEvenFibonnacciNumbers(4000000)).toBe(4613732);
  });
  it(`003 - Largest prime facor`, () => {
    // intuition
    expect(getLargestPrimeFactor(13195)).toBe(29);
    expect(getLargestPrimeFactor(600851475143)).toBe(6857);
    // math
  });
  it(`004 - Largest palindrome product`, () => {
    // intuition
    expect(getLargestPalindromeProduct(2)).toBe(9009);
    expect(getLargestPalindromeProduct(3)).toBe(906609);
    // math
  });
});

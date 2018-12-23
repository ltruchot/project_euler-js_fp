import {
  getMultiplesOf3And5,
  combineSumMul3And5
} from "./001-multiple_of_3_and_5";
import { getEvenFibonnacciNumbers } from "./002-even_fibonacci_numbers";
import { getLargestPrimeFactor } from "./003-largest_prime_factor";
describe("Project Euler", () => {
  it(`001 - multiples of 3 and 5`, () => {
    // mine
    expect(getMultiplesOf3And5(10)).toBe(23);
    expect(getMultiplesOf3And5(1000)).toBe(233168);
    // best
    expect(combineSumMul3And5(10)).toBe(23);
    expect(combineSumMul3And5(1000)).toBe(233168);
  });
  it(`002 - combine fibonacci numbers`, () => {
    // mine
    expect(getEvenFibonnacciNumbers(4000000)).toBe(4613732);
  });
  it(`003 - largest prime facor`, () => {
    // mine
    expect(getLargestPrimeFactor(13195)).toBe(29);
    expect(getLargestPrimeFactor(600851475143)).toBe(6857);
    // best
  });
});

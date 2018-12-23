import {
  combineSumMul3And5,
  getMultiplesOf3And5
} from "./001-multiple_of_3_and_5";
import { getEvenFibonnacciNumbers } from "./002-even_fibonacci_numbers";
import { getLargestPrimeFactor } from "./003-largest_prime_factor";

const testNbr = 1000000;
suite("001 - multiples of 3 and 5", function() {
  benchmark(`getMultiplesOf3And5`, function() {
    getMultiplesOf3And5(testNbr);
  });
  benchmark(`combineSumMul3And5`, function() {
    combineSumMul3And5(testNbr);
  });
  benchmark(`getEvenFibonnacciNumbers`, function() {
    getEvenFibonnacciNumbers(testNbr);
  });
  benchmark(`getLargestPrimeFactor`, function() {
    getLargestPrimeFactor(testNbr);
  });
});
suite("002 - combine fibonacci numbers", function() {
  benchmark(`getEvenFibonnacciNumbers`, function() {
    getEvenFibonnacciNumbers(testNbr);
  });
});
suite("003 - largest prime facor", function() {
  benchmark(`getLargestPrimeFactor`, function() {
    getLargestPrimeFactor(testNbr);
  });
});

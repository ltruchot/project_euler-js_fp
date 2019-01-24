import {
  bestMultiplesOf3And5,
  getMultiplesOf3And5
} from "./solutions/001-multiple_of_3_and_5";
import { getEvenFibonnacciNumbers } from "./solutions/002-even_fibonacci_numbers";
import { getLargestPrimeFactor } from "./solutions/003-largest_prime_factor";

const testNbr = 1000;
suite("001 - multiples of 3 and 5", function() {
  benchmark(`getMultiplesOf3And5`, function() {
    getMultiplesOf3And5(1000);
  });
  benchmark(`bestMultiplesOf3And5`, function() {
    bestMultiplesOf3And5(1000);
  });
});
suite("002 - combine fibonacci numbers", function() {
  benchmark(`getEvenFibonnacciNumbers`, function() {
    getEvenFibonnacciNumbers(4000000);
  });
});
suite("003 - largest prime facor", function() {
  benchmark(`getLargestPrimeFactor`, function() {
    getLargestPrimeFactor(600851475143);
  });
});

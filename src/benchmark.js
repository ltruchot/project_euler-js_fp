import {
  combineSumMul3And5,
  multiplesOf3And5
} from "./001-multiple_of_3_and_5";

suite("iterations:", function() {
  benchmark(`multiplesOf3And5`, function() {
    multiplesOf3And5(10);
    multiplesOf3And5(100);
    multiplesOf3And5(1000);
    multiplesOf3And5(10000);
    multiplesOf3And5(100000);
    multiplesOf3And5(1000000);
  });
  benchmark(`combineSumMul3And5`, function() {
    combineSumMul3And5(10);
    combineSumMul3And5(100);
    combineSumMul3And5(1000);
    combineSumMul3And5(10000);
    combineSumMul3And5(100000);
    combineSumMul3And5(1000000);
  });
});

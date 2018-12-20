import {
  multiplesOf3And5,
  combineSumMul3And5
} from "./001-multiple_of_3_and_5";
describe("Project Euler", () => {
  it(`multiples of 3 and 5`, () => {
    expect(multiplesOf3And5(10)).toBe(23);
    expect(multiplesOf3And5(1000)).toBe(233168);
    expect(combineSumMul3And5(10)).toBe(23);
    expect(combineSumMul3And5(1000)).toBe(233168);
  });
});

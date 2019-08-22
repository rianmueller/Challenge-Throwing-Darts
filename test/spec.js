const chai = require("chai");
// const mocha = require("mocha");
// const assert = require("assert");
const expect = require("chai").expect;
// const should = require("chai").should();

const scoreCalculator = require("../index.js");

// scoreCalculator should be a function
// should accept arrays of any length with numeric integer values between 1-20
// should return -1 with an empty array
// should return 10 points for scores under 5
// should return 5 point for scores between 5 and 10, inclusive
// should return no points for scores 11 and above
// should return an additional 100 points only when all array values are under 5
// should error on non-array arguments
// should error on array argument with non-numeric elements
// should error on array argument with non-integer elements
// should error on array argument with element values below 1
// should error on array argument with element values above 20

// scoreCalculator should be a function
describe("scoreCalculator", function() {
  it("should be a function", function() {
    expect(scoreCalculator).to.be.a("function");
  });

  // should accept arrays with numeric integer values between 1-20
  it("should accept arrays with numeric integer values between 1-20", function() {
    let arr = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ];
    expect(scoreCalculator(arr)).to.equal(70);
  });

  // should return -1 with an empty array
  it("should return -1 with an empty array argument", function() {
    let arr = [];
    expect(scoreCalculator(arr)).to.equal(-1);
  });

  // should return 10 points for each score under 5
  it("should return 10 points for each score under 5", function() {
    let arr = [1, 2, 3, 4];
    expect(scoreCalculator(arr)).to.equal(140);
  });

  // should return 5 point for each score between 5 and 10, inclusive
  it("should return 5 point for each score between 5 and 10, inclusive", function() {
    let arr = [5, 6, 7, 8, 9, 10];
    expect(scoreCalculator(arr)).to.equal(30);
  });

  // should return no points for each score 11 and above
  it("should return no points for each score 11 and above", function() {
    let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    expect(scoreCalculator(arr)).to.equal(0);
  });

  // should return an additional 100 points when all array values are under 5
  it("should return an additional 100 points when all array values are under 5", function() {
    let arr = [1, 2, 3, 4];
    expect(scoreCalculator(arr)).to.equal(140);
  });
});

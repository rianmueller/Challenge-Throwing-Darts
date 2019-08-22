const chai = require("chai");
const expect = require("chai").expect;

const scoreCalculator = require("../index.js");

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

  // should accept arrays of any length
  it("should accept arrays of any length", function() {
    let arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ];
    expect(scoreCalculator(arr)).to.equal(10100);
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

  // should error on numeric arguments
  it("should error on numeric arguments", function() {
    let arr = 1;
    expect(scoreCalculator.bind(arr)).to.throw();
  });

  // should error on string arguments
  it("should error on string arguments", function() {
    let arr = "foo";
    expect(scoreCalculator.bind(arr)).to.throw();
  });

  // should error on boolean arguments
  it("should error on boolean arguments", function() {
    let arr = true;
    expect(scoreCalculator.bind(arr)).to.throw();
  });

  // should error on undefined arguments
  it("should error on undefined arguments", function() {
    let arr = undefined;
    expect(scoreCalculator.bind(arr)).to.throw();
  });

  // should error on null arguments
  it("should error on null arguments", function() {
    let arr = null;
    expect(scoreCalculator.bind(arr)).to.throw();
  });

  // should error on object arguments
  it("should error on object arguments", function() {
    let arr = {};
    expect(scoreCalculator.bind(arr)).to.throw();
  });

  // should error on array argument with string elements
  it("should error on array argument with string elements", function() {
    let arr = ["foo", 2, 3];
    expect(scoreCalculator.bind(arr)).to.throw();
  });

  // should error on array argument with boolean elements
  it("should error on array argument with boolean elements", function() {
    let arr = [true, 2, 3];
    expect(scoreCalculator.bind(arr)).to.throw();
  });

  // should error on array argument with undefined elements
  it("should error on array argument with undefined elements", function() {
    let arr = [undefined, 2, 3];
    expect(scoreCalculator.bind(arr)).to.throw();
  });

  // should error on array argument with null elements
  it("should error on array argument with null elements", function() {
    let arr = [null, 2, 3];
    expect(scoreCalculator.bind(arr)).to.throw();
  });

  // should error on array argument with array elements
  it("should error on array argument with array elements", function() {
    let arr = [[1], 2, 3];
    expect(scoreCalculator.bind(arr)).to.throw();
  });

  // should error on array argument with object elements
  it("should error on array argument with object elements", function() {
    let arr = [{}, 2, 3];
    expect(scoreCalculator.bind(arr)).to.throw();
  });

  // should error on array argument with non-integer elements
  it("should error on array argument with non-integer elements", function() {
    let arr = [1.1, 2, 3];
    expect(scoreCalculator.bind(arr)).to.throw();
  });

  // should error on array argument with element values below 1
  it("should error on array argument with element values below 1", function() {
    let arr = [0, 2, 3];
    expect(scoreCalculator.bind(arr)).to.throw();
  });

  // should error on array argument with element values above 20
  it("should error on array argument with element values above 20", function() {
    let arr = ["foo", 2, 3];
    expect(scoreCalculator.bind(arr)).to.throw();
  });
});

//https://www.codewars.com/kata/5effa412233ac3002a9e471d
//For this Kata you will have to forget how to add two numbers together.

//The best explanation on what to do for this kata is this meme :
//In simple terms our method does not like the principle of carrying over numbers and just writes down every number it calculates.

//You may assume both integers are positive integers and the result will not be bigger than Integer.MAX_VALUE (only for java)


function add(num1, num2) {
   let answer = ""
    
    while(num1+num2) {
        answer = num1%10 + num2%10 + answer
        num1 = ~~(num1/10)
        num2 = ~~(num2/10)
    }
    
    return +answer
}




//TEST:

const { assert } = require('chai');

describe("Silly addition", () => {
  it("Real addition", () => {
    assert.strictEqual(add(2, 11), 13);
    assert.strictEqual(add(0, 1), 1);
    assert.strictEqual(add(0, 0), 0);
  });
  
  it("Silly addition", () => {
    assert.strictEqual(add(16, 18), 214);
    assert.strictEqual(add(26, 39), 515);
    assert.strictEqual(add(122, 81), 1103);
  });
  
  it("Big addition", () => {
    assert.strictEqual(add(1222, 30277), 31499);
    assert.strictEqual(add(1236, 30977), 31111013);
    assert.strictEqual(add(38810, 1383), 391193);
    assert.strictEqual(add(49999, 49999), 818181818);
  });
});

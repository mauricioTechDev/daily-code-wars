// given a number n, draw stairs with 'I' n tall and n wide, with the tallest in the top left. Example (with - to represent spaces; DO NOT USE THEM IN THE SOLUTIONS! USE SPACES IN SOLUTION! the "-"s are for clarity.): draw_stairs(3) == '''I\n_I\n__I'''
//
// For example, a 7-step stairs should be drawn like this:
// describe("Some simple stairs", function() {
//   it("Draw stairs with only 1 step", () => assert.equal(drawStairs(1), "I", "The first step has no padding on the left, just an 'I'"));
//   it("Draw stairs with 3 steps", () => assert.equal(drawStairs(3), "I\n I\n  I", "There's something wrong with these 3 steps"));
//   it("Draw stairs with 5 steps", () => assert.equal(drawStairs(5), "I\n I\n  I\n   I\n    I", "5-step stairs no good"));
// });


function drawStairs(n) {
  let str = ""
  if(n === 0){
    return str;
  }else{
    for(let i = 1; i < n; i++)
      str = str + "I\n" + " ".repeat(i);
    return str + "I";
  }
}

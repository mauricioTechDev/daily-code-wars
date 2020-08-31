//For a given string s find the character c (or C) with longest consecutive repetition and return:
//[c, l]
//where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.
//For empty string return:
//["", 0]

//TEST

Test.describe("Longest repetition", ()=>{
  Test.it("Example tests", function(){
    Test.assertDeepEquals( longestRepetition("aaaabb"),      ["a",4] );
    Test.assertDeepEquals( longestRepetition("bbbaaabaaaa"), ["a",4] );
    Test.assertDeepEquals( longestRepetition("cbdeuuu900"),  ["u",3] );
    Test.assertDeepEquals( longestRepetition("abbbbb"),      ["b",5] );
    Test.assertDeepEquals( longestRepetition("aabb"),        ["a",2] );
    Test.assertDeepEquals( longestRepetition(""),            ["",0] );
    Test.assertDeepEquals( longestRepetition("ba"),          ["b",1] );
  });
});



function longestRepetition(s) {
  var result = ["",0];
  var counter = {};
  
  if(s != ""){

    for(var i=0; i<s.length; i++){  
      if(counter[s[i]] == null){
        counter[s[i]] = 1;
      }else if(s[i] == s[i-1]){
        counter[s[i]] = counter[s[i]] + 1;
      }else {
        counter[s[i]] = 1;
      }
      if(result[1] < counter[s[i]]){ result = [s[i],counter[s[i]]];}
    }

  }
  return result;
}

//You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using an asterisk (*).

//For example:

//"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
//As you can see, the letter c is shown only once, but with 2 asterisks.

//The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

//Note that the return string 
describe("Sample tests", function() {
  it("Tests", function() {
    assert.equal(getStrings("Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*");
    assert.equal(getStrings("Bangkok"), "b:*,a:*,n:*,g:*,k:**,o:*");
    assert.equal(getStrings("Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*");
  });
});


function getStrings(city){
  let map = {};
  
  for(let i = 0; i < city.length; i++){
    if(city[i] !== ' '){
     let letter = city[i].toLowerCase()
    if(map[letter]){
      map[letter]+='*'
    }else{
      map[letter]= '*'
    } 
    }
  }
  
  const t = Object.entries(map);
  const tLenth = t.length;
  let ans = '';
  
  for(let j = 0; j < t.length; j++){
    ans+=`${t[j][0]}:${t[j][1]}`
    if(j !== t.length-1){
     ans+=',' 
    }
  }
  
  
  return ans
}

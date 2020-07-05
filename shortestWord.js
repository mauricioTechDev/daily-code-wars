Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
Test.describe("Example tests",_=>{
Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3);
});

function findShort(s){
  let arr  = s.split(' ');
  let smallest = arr[0].length;

  for(let i = 0; i < arr.length; i++){
    if(arr[i].length <= smallest){
      smallest = arr[i].length
    }
  }
  return smallest;
}


// TYPESCRIPT

export function findShort(s: string): number {
  const arr: string[] = s.split(' ')
  let smallest: number = arr[0].length

  for(let i = 0; i < arr.length; i++){
    if(arr[i].length <= smallest){
      smallest = arr[i].length
    }
  }
  return smallest; // your code here
}

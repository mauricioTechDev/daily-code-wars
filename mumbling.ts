This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.


export function accum(s: string): string {
  let ans = '';
  let arr = s.split('');
  let index = 0;
  
  for(let i = 0; i < arr.length; i++){
    index = i;
    let upperCase = arr[i].toUpperCase();
    if(i === 0){
      ans+= upperCase;
      index--;
    } else {
      ans+='-';
      ans+= upperCase;
      index--;
    }
    while(index >= 0){
      ans+= arr[i].toLowerCase();
      index--
    }
  }
  
  return ans
}

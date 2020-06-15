Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Lua: returns a Table;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ',
  ' *** ',
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]




function towerBuilder(nFloors) {
  // build here
  let pyramid = []
  let lengthOfString = (nFloors*2)-1
  let str = ''

  for(let i = 1; i<nFloors+1; i++){
    str+=' '.repeat(nFloors - i)
    str+='*'.repeat((i*2)-1)
    str+=' '.repeat(nFloors - i)
    pyramid.push(str)
    str = ''

  }
  return pyramid
}

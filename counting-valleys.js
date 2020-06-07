You need count how many valleys you will pass.

Start is always from zero level.

Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.

One passed valley is equal one entry and one exit of a valley.

s='FUFFDDFDUDFUFUF'
U=UP
F=FORWARD
D=DOWN
To represent string above

(level 1)  __
(level 0)_/  \         _(exit we are again on level 0)
(entry-1)     \_     _/
(level-2)       \/\_/



time complecity O(N)
soace O(N)
function countingValleys(s) {
  //here we go again
  let f = 0
  let u = 1
  let d = -1


  let currentPosition = 0
  let valleyCount = 0
  let valleyEnterThenExit = 0

  for(let i = 0; i < s.length; i++){
    if(currentPosition === 0 && s[i] === 'D'){
      valleyEnterThenExit--
    }
    if(currentPosition === -1 && s[i] === 'U'){
      valleyEnterThenExit++
      valleyCount++
    }

    if(s[i] === 'F'){
      currentPosition+= f
    }
    if(s[i] === 'U'){
      currentPosition+= u
    }
    if(s[i] === 'D'){
      currentPosition+= d
    }
//     entered the valley

  }
  return valleyCount
}

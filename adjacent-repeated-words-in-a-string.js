You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that *"the"* is doubled in the first sentence of this description?

As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like *"as"* at the beginning of the sentence.

Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other count as one.

Example:

"dog cat"                 --> 0
"dog DOG cat"             --> 1
"apple dog cat"           --> 0
"pineapple apple dog cat" --> 0
"apple     apple dog cat" --> 1
"apple dog apple dog cat" --> 0
"dog dog DOG dog dog dog" --> 1
"dog dog dog dog cat cat" --> 2
"cat cat dog dog cat cat" --> 3




function countAdjacentPairs(searchString) {
  let pointer1 = 0
  let pointer2 = 1
  let lowerCaseString = searchString.toLowerCase()
  let arr = lowerCaseString.split(' ')
  let length = arr.length
  let check = {}
  while(pointer1 < length && pointer2 < length){
    if(arr[pointer1] === arr[pointer2]){
      if(check[pointer1]){
//       if key value pair exist push into the array
        check[pointer1].push(arr[pointer2])
        pointer2++
      } else {
//       create key value pair
        check[pointer1] = [arr[pointer2]]
        pointer2++
      }
    } else {
      pointer1 = pointer2
      pointer2++
    }
  }

  return Object.values(check).length
}

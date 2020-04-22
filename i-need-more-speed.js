Write a function that will take in any array and reverse it.

Sounds simple doesn't it?

NOTES:

Array should be reversed in place! (no need to return it)
Usual builtins have been deactivated. Don't count on them.
You'll have to do it fast enough, so think about performances



function reverse(arr) {
   //code me
   let left = 0
   let right = arr.length - 1
   while(left < right){
     let store = arr[right]
     arr[right] = arr[left]
     arr[left] = store
     left++
     right--
   }

}

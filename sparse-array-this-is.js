JavaScript has sparse arrays, in which not all of its elements are necessarily set. As a result, the length of a javascript array may be greater than the number of its elements. It would be useful to have an array method that checks whether or not an array is sparse.

The challenge here is to create such a method. Please remember that an element in an array can be set to anything including "null" and "undefined". Such elements are not considered sparse in JavaScript. One of the ways to make sparse arrays is for example by deleting some elements in a regular array, like in "delete array[i]", where i < array.length. Also remember that an empty array is not a sparse array by definition.
TEST
var array1 = [1,2,3], array2 = [,2,3],
    msg1 = '[' + array1.toString() + '] is not a sparse array!',
    msg2 = '[' + array2.toString() + '] is a sparse array';
Test.expect(!array1.isSparse(), msg1);
Test.expect(array2.isSparse(), msg2);


Array.prototype.isSparse = function() {
  for(let i=0; i<this.length; i++) {
    if(!this.hasOwnProperty(i)) return true
    }
  return false;
}

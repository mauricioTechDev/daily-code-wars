Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. E.g
chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]



let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let size = 5
function chunkArray(array,size){
  let result = []

  for(let i = 0; i<array.length; i+=size){
    let chunk = array.slice(i, i + size)
    result.push(chunk)
  }
  return result
}

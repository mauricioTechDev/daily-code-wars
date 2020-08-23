Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1, 2, 5, 10, 50]
solution([]); // should return []

export function solution(nums: number[]): number[] {
  if(nums.length === 0) return [];
  if(nums === null) return [];
  
  return nums.sort((a, b) => a - b)
}

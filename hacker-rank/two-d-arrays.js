// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays


function hourglassSum(arr) {
    let ansArr = [];
    let currentSum = 0
    
    for(let i = 1; i < arr.length - 1; i++){
        for(let j = 1; j < arr[i].length-1; j++){
            currentSum= arr[i][j]+arr[i-1][j]+arr[i-1][j-1]+arr[i-1][j+1]+arr[i+1][j]+arr[i+1][j-1]+arr[i+1][j+1];
            ansArr.push(currentSum);
            currentSum = 0;
        }
    }
    return Math.max(...ansArr);
}

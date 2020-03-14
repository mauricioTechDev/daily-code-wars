Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

For example, given the array  there are  elements, two positive, two negative and one zero. Their ratios would be ,  and . It should be printed as

0.400000
0.400000
0.200000
Function Description

Complete the plusMinus function in the editor below. It should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals.

plusMinus has the following parameter(s):

arr: an array of integers





function plusMinus(arr) {
    let length = arr.length
    let positiveNums = 0
    let zeroNums = 0
    let negativeNums = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i]==0){
            zeroNums++
        }
        if(arr[i]>0){
            positiveNums++
        }
        if(arr[i]<0){
            negativeNums++
        }
    }
    console.log(positiveNums/length)
    console.log(negativeNums/length)
    console.log(zeroNums/length)
}

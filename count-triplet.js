



function countTriplets(arr, r) {
    let second = {}
    let third = {}
    let count = 0;
    for (let index = 0; index < arr.length; index++) {

        const val = arr[index];

        //If value found on third then add it to count
        if(third[val]){
            count += third[val];
        }

        //If value found on second , convey it to third

        if(second[val]){
            third[val*r] = third[val*r] + second[val] || second[val];
        }

        //add current element into second value

        second[val*r] = second[val*r]+1 || 1;
    }
    You are given an array and you need to find number of tripets of indices  such that the elements at those indices are in geometric progression for a given common ratio  and .

    For example, . If , we have  and  at indices  and .

    Function Description

    Complete the countTriplets function in the editor below. It should return the number of triplets forming a geometric progression for a given  as an integer.

    countTriplets has the following parameter(s):

    arr: an array of integers
    r: an integer, the common ratio
    Input Format

    The first line contains two space-separated integers  and , the size of  and the common ratio.
    The next line contains  space-seperated integers .

    Constraints

    Output Format

    Return the count of triplets that form a geometric progression.

    return count;
}

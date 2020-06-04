You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin.



/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

Time compexility O(N * M)
n=coins amount
m= amount

Space O(L) l=length of dp array
 
var coinChange = function(coins, amount) {
   let dpArray = new Array(amount+1)
   dpArray.fill(amount+1)
   dpArray[0] = 0

    for(let i = 1; i <= amount; i++){
        for(let j = 0; j < coins.length; j++){
            if(coins[j] <= i){
                dpArray[i] = Math.min(dpArray[i], 1 + dpArray[i - coins[j]] )
            }
        }
    }
    return dpArray[amount] > amount ? -1 : dpArray[amount]


};

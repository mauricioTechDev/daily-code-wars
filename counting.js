Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

1+1+1+1, 1+1+2, 2+2.
The order of coins does not matter:

1+1+2 == 2+1+1
Also, assume that you have an infinite amount of coins.

Your function should take an amount to change and an array of unique denominations for the coins:

  countChange(4, [1,2]) // => 3
  countChange(10, [5,2,3]) // => 4
  countChange(11, [5,7]) //  => 0




var countChange = function(money, coins) {
    // your implementation here
    return countChangeHelper(money, coins);
}
var countChangeHelper = function(money, coins) {
    // If we found a way to cleanly add up to the money
    if (money == 0) {
        return 1;
    }
    // If we went over our given money or we have no more coins left
    if (money < 0 || coins.length == 0) {
        return 0;
    }
    // We can split these up into two sets,
    //   1) Set that has the coin at the end of the coins array
    //   2) Set that does not contain that coin
    return countChangeHelper(money - coins[coins.length-1], coins) + countChangeHelper(money, coins.slice(0, -1))
}

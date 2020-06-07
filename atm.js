There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

You are given money in nominal value of n with 1<=n<=1500.

Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.

Good Luck!!!


function solve(n) {
  // Your code here
  let dp = new Array(n+1);
  dp.fill(n+1);
  dp[0] = 0;

  let money = [10, 20, 50, 100, 200, 500];

  for(let i = 0; i <= n; i++){
   for(let j = 0; j < money.length; j++){
     if(money[j] <= i){
       dp[i] = Math.min(dp[i], 1 + dp[i - money[j]])
     }
   }
  }
 return dp[n] > n ? -1 : dp[n]

}

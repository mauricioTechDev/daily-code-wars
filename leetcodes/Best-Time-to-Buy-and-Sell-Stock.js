// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {    
    let result = 0;
    let min = prices[0];
    for(let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        result = Math.max(result, prices[i] - min);
    }
    return result;
};

// Brute Force
var maxProfit = function(prices) {
//     Store key as index and value as indexValue
    let map = []
    let diff = 0
    for(let i = 0; i < prices.length; i++){
        for(let j = i; j < prices.length; j++){
            if(prices[i] < prices[j]){
                diff = prices[j] - prices[i]
                map.push(diff);
            }
        }
    }
    
    return map.length >= 1 ? Math.max(...map) : 0
    
};


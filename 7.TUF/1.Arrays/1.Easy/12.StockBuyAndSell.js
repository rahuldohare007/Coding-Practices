function maxProfit(prices) {
  let profit = 0;
  let buy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    } else if (prices[i] - buy > profit) {
      profit = prices[i] - buy;
    }
  }
  return profit;
}

const prices = [7, 1, 5, 3, 6, 4]; //5
// const prices = [7,6,4,3,1] //0
console.log(maxProfit(prices)); //5

// Time Complexity = O(n)
// Space Complexity = O(1)

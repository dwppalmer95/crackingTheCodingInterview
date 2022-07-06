/*
Given the weights and profits of ‘N’ items, we are asked to put these items in a knapsack with a capacity ‘C.’ The goal is to get the maximum profit out of the knapsack items. Each item can only be selected once, as we don’t have multiple quantities of any item.

Let’s take Merry’s example, who wants to carry some fruits in the knapsack to get maximum profit. Here are the weights and profits of the fruits:

Items: { Apple, Orange, Banana, Melon }
Weights: { 2, 3, 1, 4 }
Profits: { 4, 5, 3, 7 }
Knapsack capacity: 5
*/

// completed 07-05-2022
// time: O(N!) space: O(N)
let solveKnapsack = function(profits, weights, capacity) {
  let maxProfit = 0, totalWt = 0, totalProfit = 0;
  for (let i = 0; i < weights.length; i++) {
    totalWt += weights[i];
    totalProfit += profits[i];
  }
  if (totalWt <= capacity) maxProfit = totalProfit;
  if (weights.length === 1) return maxProfit;
  for (let i = 0; i < weights.length; i++) {
    const newWeights = [...weights];
    const newProfits = [...profits];
    newWeights.splice(i, 1);
    newProfits.splice(i, 1);
    maxProfit = Math.max(maxProfit, solveKnapsack(newProfits, newWeights, capacity));
  }
  
  return maxProfit;
};


// completed 07-05-2022
// time: O(2^n); space: O(N)
let solveKnapsack2 = function(p, w, c, idx = 0) {
  if (idx >= w.length) return 0;
  let tp1 = 0;
  if (w[idx] <= c) {
    tp1 = p[idx] + solveKnapsack(p, w, c - w[idx], idx + 1);
  }
  const tp2 = solveKnapsack(p, w, c, idx + 1);
  return Math.max(tp1, tp2);
};

let solveKnapsackMemoize = (p, w, c) => {
  const cache = {};

  let solveKnapsackRecursive = function(p, w, c, comb =[]) {
    if (comb.length === 0) {
      for (let i = 0; i < w.length; i++) {
        comb.push(i);
      }
    }
    const combHash = comb.toString();
    if (cache.hasOwnProperty(combHash)) return cache[combHash];
    let totalW = 0, totalP = 0;
    for (let i = 0; i < comb.length; i++) {
      const index = comb[i];
      totalW += w[index];
      totalP += p[index];
    }
    let maxP = totalW <= c ? totalP : 0;
    if (comb.length === 1) return maxP;
    for (let i = 0; i < comb.length; i++) {
      const nextComb = [...comb];
      nextComb.splice(i, 1);
      maxP = Math.max(maxP, solveKnapsackRecursive(p, w, c, nextComb));
    }
    cache[combHash] = maxP;
    return maxP;
  };
  return solveKnapsackRecursive(p, w, c);
}


var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);


var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);


/* Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
*/

// copied 05-12-2022
const pair_with_targetsum = function(arr, target_sum) {
  
  let startPoint = 0;
  let endPoint = arr.length - 1;

  while (startPoint < endPoint) {
    const sum = arr[startPoint] + arr[endPoint];

    if (sum === target_sum) return [startPoint, endPoint];
    if (sum > target_sum) endPoint--;
    if (sum < target_sum) startPoint++;
  }
  
  return [-1, -1];
}

/* Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
*/

// completed ?; copied 05-12-2022
const pair_with_targetsum1 = function(arr, target_sum) {
  
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

// completed 05-12-2022
const pair_with_targetsum2 = function(arr, target_sum) {

  console.log('start');
  console.log(arr);
  arr.sort((a, b) => a < b ? -1 : 0);
  console.log(arr);
  let pointer1 = 0, pointer2 = arr.length - 1;
  while (pointer1 < pointer2) {
    const currentSum = arr[pointer1] + arr[pointer2];
    console.log(pointer1, pointer2);
    console.log(currentSum);
    // [2, 5, 9, 11]
    if (currentSum === target_sum) return [pointer1, pointer2];
    if (currentSum < target_sum) {
      pointer1++;
      continue;
    }
    pointer2--;
  }
  return [-1, -1];
}


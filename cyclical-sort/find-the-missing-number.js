// completed 05/22/22
// time: O(n) (O(n) + O(n - 1)) space: O(1)
const find_missing_number = function(nums) {
  // riedag
  // 1. restate
    // find the missing number in an array of n numbers that range from 0 to n
    // require O(1) space
  // 2. i/o
    // input: array of unique integers unsorted
    // output: number (the missing number)
  // 3. edge cases/examples
    // [1, 0, 3, 5, 2] => 2
    // poor input formatting
  // 4. data structures
    // array
  // 5. algo pattern
    // cyclical sort
  // 6. general approach
    // place each number at it's corresponding index, skipping the number that's outside the array
      // track the index that holds the number that sits outside of the array
    // create a variable - missing number; set it equal to the length of the array
    // iterate the input array
    // if the number at the current index is equal to the length of the array
      // set missing number equal to the current index
      // continue
    // while the number at the current index is not equal to the value of the index
      // swap it with the number at it's correct index
    // return the missing number
  let missingNumber = nums.length;
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i) {
      if (nums[i] === nums.length) {
        missingNumber = i;
        break;
      }
      const targetIndex = nums[i];
      [nums[i], nums[targetIndex]] = [nums[targetIndex], nums[i]];
    }
  }
  return missingNumber;
};

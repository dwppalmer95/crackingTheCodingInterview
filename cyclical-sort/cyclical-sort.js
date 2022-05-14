// completed 05-14-2022
// time: O(N); space: O(1);
// refactor: try completing without using any array methods and no extra space (other than iterator variables)
const cyclic_sort = function(nums) {
  let i = 0;
  while(i < nums.length) {
    if (nums[i] - 1 === i) {
      i++;
      continue;
    }
    nums.splice(nums[i] - 1, 0, nums.splice(i, 1)[0]);
    console.log(i, nums);
  }
  
  return nums;
}


console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`)
console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`)
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`)
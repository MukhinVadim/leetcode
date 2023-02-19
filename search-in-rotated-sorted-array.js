/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
      let mid = ~~((l + r) / 2) 
      let midNum = nums[mid]
      
      if (target === midNum) {
          return mid
      }

      if (nums[l] <= midNum) {
          if (target > midNum || target < nums[l]) {
              l = ++mid
          } else {
              r = --mid
          }
      } else {
          if (target < midNum || target > nums[r]) {
              r = --mid
          } else {
              l = ++mid
          }
      }
  }

  return -1
};

// [1, 3, 4]
// [3, 1, 2]
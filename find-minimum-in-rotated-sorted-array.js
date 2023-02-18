// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let l = 0
  let r = nums.length - 1

  if (nums.length === 1) {
      return nums[0]
  }

  if (nums[l] < nums[r]) {
          return nums[l];
  }

  while (l <= r) {
      let mid = ~~((l + r) / 2)
      let leftOfMid = nums[mid - 1]
      let rightOfMid = nums[mid + 1]
      let midNum = nums[mid]

      if (midNum < leftOfMid) {
          return midNum
      } else if (midNum > rightOfMid) {
          return rightOfMid
      }

      if (midNum > nums[l]) {
          l = ++mid
      } else {
          r = --mid
      }
  }

  return nums[0]
};

// [4,5,6,7,8,1,2]
// 


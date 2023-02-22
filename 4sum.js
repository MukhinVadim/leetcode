//https://leetcode.com/problems/4sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums = nums.sort((a, b) => a - b)
  const result = []

  for (let a = 0; a < nums.length - 3; a++) {
      for(let b = a + 1; b < nums.length - 2; b++) {
          let c = b + 1
          let d = nums.length - 1

          while (c < d) {
              let sum = nums[a] + nums[b] + nums[c] + nums[d]
              if (sum < target) {
                  c++
              } else if (sum > target) {
                  d--
              } else {
                  result.push([nums[a], nums[b], nums[c], nums[d]])
                  c++
                  while(nums[c] === nums[c - 1]) {
                      c++
                  }
              }
          }

          while (nums[b] === nums[b + 1]) b++
      }
      while (nums[a] === nums[a + 1]) a++
  }

  return result;
};
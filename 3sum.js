/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b)
  const result = []
  
  for (let i = 0; i < nums.length; i++) {

      if (i > 0 && nums[i] === nums[i - 1]) {
          continue;
      }
      let start = i + 1
      let end = nums.length - 1

      while (start < end) {
          let sum = nums[i] + nums[start] + nums[end]

          if (sum > 0) {
              end--
          } else if (sum < 0) {
              start++
          } else {
              result.push([nums[i], nums[start], nums[end]])
              while (nums[start - 1] === nums[start]) {
                start++
              }
          }
      }
  }

  return result;
};

console.log(threeSum([0, 0, 0, 0]));
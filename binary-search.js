//https://leetcode.com/problems/binary-search/submissions/897460332/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {  
    let start = 0
    let end = nums.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (target > nums[mid]) {
            start = ++mid
        } else if (target < nums[mid]) {
            end = --mid
        } else {
            return mid
        }
    }

    return -1
}
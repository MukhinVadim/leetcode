//https://leetcode.com/problems/search-a-2d-matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let cols = matrix[0].length
  let rows = matrix.length
  let top = 0;
  let bottom = rows - 1;

  while (top <= bottom) {
      let row = ~~((top + bottom) / 2)

      if (target > matrix[row][cols - 1]) {
          top = ++row
      } else if (target < matrix[row][0]) {
          bottom = --row
      } else {
          let left = 0;
          let right = cols - 1
          let currentRow = matrix[row]

          while (left <= right) {
              let mid = ~~((left + right) / 2)
              if (target > currentRow[mid]) {
                  left = ++mid
              } else if (target < currentRow[mid]) {
                  right = --mid
              } else if (target === currentRow[mid]) {
                return true;
              }
          }

          return false;
      }
  }

  return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 18))
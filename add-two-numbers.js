// https://leetcode.com/problems/add-two-numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0
  const dumy = new ListNode(0)
  let current = dumy

  while (l1 || l2 || carry) {
      let v1 = l1?.val || 0
      let v2 = l2?.val || 0
      
      let res = v1 + v2 + carry
      if (res >= 10) {
          carry = Math.floor(res / 10)
          res = res % 10
      } else {
          carry = 0
      }
  
      current.next = new ListNode(res)
      current = current.next
      l1 = l1 && l1.next
      l2 = l2 && l2.next
  }

  return dumy.next
};
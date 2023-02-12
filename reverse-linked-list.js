//https://leetcode.com/problems/reverse-linked-list/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let current = head
  let prev = null

  while (current) {
      let next = current.next
      current.next = prev

      prev = current
      current = next
  }

  return prev;
};


console.log((reverseList(
  new ListNode(1,
      new ListNode (2,
          new ListNode(3, 
            new ListNode(4, 
              new ListNode(5)))
        )
    )
)))
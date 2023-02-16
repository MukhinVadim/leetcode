/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  while (lists.length > 1) {
    let a = lists.shift()
    let b = lists.shift()

    let mergedLists = mergeTwoLists(a, b)
    lists.unshift(mergedLists)
  }

  return lists[0]
};

var mergeTwoLists = (a, b) => {
  let dummy = new ListNode(0)
  let temp = dummy;

  while (a || b) {
    if (!a) {
      temp.next = b
      b = b.next
    } else if (!b) {
      temp.next = a
      a = a.next
    } else if (a.val > b.val) {
      temp.next = b
      b = b.next
    } else {
      temp.next = a
      a = a.next
    }

    temp = temp.next
  }

  return dummy.next
}

const list1 = new ListNode(1,
  new ListNode(3,
    new ListNode(5))
)

const list2 = new ListNode(2,
  new ListNode(6)
)

console.log(mergeKLists([list1, list2]));
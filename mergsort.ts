class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}
let node_7 = new ListNode(7);
let node_1 = new ListNode(1, node_7);
let node_3 = new ListNode(3, node_1);
let node_9 = new ListNode(9, node_3);

function find_middle(head: ListNode) {
  let slow: ListNode | null = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }
  return slow;
}

function mergeLists(list1: ListNode | null, list2: ListNode | null) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }

  if (list1.val < list2.val) {
    list1.next = mergeLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeLists(list1, list2.next);
    return list2;
  }
}

function mergesort(head: ListNode) {
  if (!head || !head.next) {
    return head;
  }

  let middleNode = find_middle(head);
  let after_middle = middleNode!.next;
  middleNode!.next = null;
  let left = mergesort(head);
  let right = mergesort(after_middle!);

  let sorted_list = mergeLists(left!, right!);

  return sorted_list;
}

console.log(node_9);

let my_list = mergesort(node_9);

console.log(my_list);

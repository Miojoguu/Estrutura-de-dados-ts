class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let ahead = head;
  while (ahead && ahead.next) {
    head = head!.next;
    ahead = ahead.next.next;
  }
  return ahead;
}

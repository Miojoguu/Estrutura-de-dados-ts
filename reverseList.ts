// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

// function reverseList(head: ListNode | null): ListNode | null {
//   let newHead = null;
//   while (head) {
//     let nextHead = head.next;
//     head.next = newHead;
//     newHead = head;
//     head = nextHead;
//   }
//   return newHead;
// }

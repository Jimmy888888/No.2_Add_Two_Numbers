
 // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }
 
/** 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let myList = new ListNode;//val===undefined ? 0 : val
    //record myList's head iterator
    let head_myList = myList;

    let carry = 0;
    let sum = 0;

    //only when l1 l2 are empty and carry = 0, this loop will stop
    while( l1 !== null || l2 !== null || carry > 0)
    {
        //check l1 is not empty
        if(l1 !== null)
        {
            sum += l1.val;
            l1 = l1.next;
        }

        //check l2 is not empty
        if(l2 !== null)
        {
            sum += l2.val;
            l2 = l2.next;
        }

        sum += carry;
        carry = ( sum >= 10 ? 1 : 0);
        sum = ( sum >= 10 ? (sum -10) : sum);

        myList.next = new ListNode(sum);
        myList = myList.next;

        sum = 0;
    }
    //head_myList.val = null, so return head_myList.next
    return head_myList.next;
};

//debug
let l1 = new ListNode(2);
let tl1 = l1;
l1.next = new ListNode(4);
l1 = l1.next;
l1.next = new ListNode(3);

let l2 = new ListNode(5);
let tl2 = l2;
l2.next = new ListNode(6);
l2 = l2.next;
l2.next = new ListNode(4);

let testl = addTwoNumbers(tl1,tl2);
testl = testl.next.next;
console.log(testl.val);
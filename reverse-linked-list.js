Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?



var reverseList = function(head) {
       // prev determine where I will point my pointer nect
        let prev = null
        // cuurent position in linked list
        let curr = head
        // cached position where I will move my current position to after changin pointers position
        let next = null
    while(curr !== null){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
};

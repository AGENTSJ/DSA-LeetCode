/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null
    let current = head
    let nxt =true
    
    while(nxt!==null&&current!==null){

        nxt = current.next
        current.next = prev 
        prev = current
        current = nxt
        if(current===null){
            return prev
        }
    }
    return head
};
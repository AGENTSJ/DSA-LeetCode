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
var deleteMiddle = function(head) {
    let listArr = []
    // parent->child
    let th = head
    count = 0
    while(th!==null){
        
        listArr.push(th)
        th = th.next
        
    }
    // console.log(map)
    if(listArr.length===1){
        head = null
        return head
    }
    let middleidx = Math.floor(listArr.length/2)
    delNode(middleidx,listArr)
    // console.log(head)
    return head

};
function delNode(nodeidx,listArr){

        let node = listArr[nodeidx]
        let prev = listArr[nodeidx-1]
        prev.next = node.next

}/**
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
var deleteMiddle = function(head) {
    let listArr = []
    // parent->child
    let th = head
    count = 0
    while(th!==null){
        
        listArr.push(th)
        th = th.next
        
    }
    // console.log(map)
    if(listArr.length===1){
        head = null
        return head
    }
    let middleidx = Math.floor(listArr.length/2)
    delNode(middleidx,listArr)
    // console.log(head)
    return head

};
function delNode(nodeidx,listArr){

        let node = listArr[nodeidx]
        let prev = listArr[nodeidx-1]
        prev.next = node.next

}
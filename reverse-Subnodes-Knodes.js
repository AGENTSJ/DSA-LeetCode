/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let last=0;
var reverseKGroup = function(head, k) {
    
    let list = head
    let result = new ListNode()
    let blank = new ListNode("$",null)
    jumble(list,k,result)
    if(last.next.val==blank.val){
        
        last.next = null
    }
    return result
    
};

function jumble(list,k,result){
    let parent = new Map()//child=>parent
    let count = 0
    let station = list
    while(count<k-1){
        if(list!=null){
            if(list.next===null){last.next = station}
            parent.set(list.next,list)
            list = list.next
        }
        count++
    }
    let poin = list
    count=0
    while(count<k){//append to result
        count++
        if(poin===null){
            return
        }
        result.val = poin.val
        let temp = new ListNode("$",null)
        last = result
        result.next = temp
        result = result.next 
        poin = parent.get(poin)
       
    }
    list = list.next
    jumble(list,k,result)
}
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
var mergeKLists = function(lists) {
    let result = new ListNode(null,null)
    let tempnode = result
    let temp = []
         let pointers=[]
         for(let i=0;i<lists.length;i++){
             pointers.push(0)
         }
     let flag = true
     while(flag){
 
         let minNodeIdx=0;
         let count = 0
         for(let i=0;i<lists.length;i++){
             if(lists[minNodeIdx]===null&& i>0){minNodeIdx++}
             if(lists[i]!==null){
                 if(lists[minNodeIdx].val>lists[i].val){
                     minNodeIdx = i
                 }
             }else{
                 count++
             }
            
         }
         tempnode.next = lists[minNodeIdx]
         tempnode = tempnode.next 
 
         if(count===lists.length){
             result= result.next!==undefined?result.next:null
             flag=false
             return result
         }else{
 
             temp.push( lists[minNodeIdx].val)
             lists[minNodeIdx] = lists[minNodeIdx].next
         }
     }
 };
 
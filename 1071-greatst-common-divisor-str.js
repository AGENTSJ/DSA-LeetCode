/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let terminalset1 = []
    let terminalset2 = []
    traverse(root1,terminalset1)
    traverse(root2,terminalset2)
    let len = terminalset1.length
    if(len!=terminalset2.length){
        return false
    }else{
        for(let i=0;i<len;i++){
            if(terminalset1[i]!==terminalset2[i]){
                return false
            }
        }
        return true
    }
    
   
    function traverse(node,terminals){
        
        let left = node.left
        let right = node.right
        if(left ==null && right==null){
            terminals.push(node.val)
        }
        if(left!==null){
            traverse(left,terminals)
        }
        if(right!==null){
            traverse(right,terminals)
        }
       
    }
};
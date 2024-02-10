/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let res = search(root,val);
    
    return res;
};

function search(node,val){
    // console.log(node.val)
    if(node === null){
        return null;
    }
    if(node.val>val){
        return search(node.left,val);
    }else if(node.val<val){
        return search(node.right,val)
    }else if(node.val ===val){
        return node;
    }
}

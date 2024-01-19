/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let pointer = 0
    for(let i=0;i<t.length;i++){
        if(t[i]===s[pointer]){
            // console.log(true)
            pointer++
        }
    }
    if(pointer===s.length){
        return true
    }else{
        return false
    }
};h
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let result=0
    
    for(let i=0;i<s.length;i++){
        for(let j =i;j<s.length;j++){

            let str = s.slice(i,j+1)
            // console.log(str)
            let res = checkPalindrome(str);
            if(res!==false){
                // result.push(res);
                result++
            }
        }
    }
    // console.log(result)
    return result
};

function checkPalindrome(str){
    let temstr = str;
    let ptr2 = temstr.length-1;
    for(let i=0;i<temstr.length/2;i++){

        if(temstr[i]!==temstr[ptr2]){
            return false
        }
        ptr2--;

    }
   
    return true
}